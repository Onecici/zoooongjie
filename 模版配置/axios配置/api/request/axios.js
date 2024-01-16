import axios from "axios";
import store from "@/store";


const formatHtml = function(obj) {
  let data = obj.data.data;

  let str;
  let type = typeof data;
  if (type == "object") {
    str = JSON.stringify(data);
  } else {
    str = String(data);
  }
  str = str.replace(/&nbsp;/gi, " ");
  str = str.replace(/&lt;/gi, "<");
  str = str.replace(/&gt;/gi, ">");
  str = str.replace(/&quot;/gi, '\\"');
  str = str.replace(/&apos;/gi, "'");
  data = type == "object" ? JSON.parse(str) : str;

  obj.data.data = data;
  return obj;
};

// 彩票多语言code映射，供电竞彩使用
const CP_LANG_MAP = {
  cn: 'zh_cn',
  zh: 'zh_tw',
  en: 'en_us',
  vi: 'vn_lg',
  th: 'ti_lg',
  ml: 'ml',
  ni: 'id_id',
}

// axios 配置
const instance = axios.create({
  timeout: 15000,
  baseURL: window.APP_BASE_URL
  // withCredentials:true,
});
// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {

    let token = store.state.user.token;
    let lang = localStorage.getItem('language') || 'cn';

    // 是否是电竞彩
    let isTeseLOL = config.url.indexOf("/coron/") !== -1 || config.url.indexOf("/boracay/") !== -1;
    if(isTeseLOL) {
        config.url = localStorage.lolApiDomain + config.url;
        token = localStorage.lolToken;
        lang = CP_LANG_MAP[lang];
    }

    config.headers["token"] = token;
    config.headers["device"] = 1;
    config.headers["lang"] = lang;

    return config;
  },
  (error) => {}
);
// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.data.data == "token") {
      window.location.href = "/tokenInvalid";
    }
    const res = formatHtml(response);

    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
