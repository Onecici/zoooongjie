import request from "./axios";
import Api from "./api";
import qs from "qs";

/**
 * @登陆
 * @param {*} data = {username，pwd}
 */
export function requestUserLogin(data) {
    data = qs.stringify(data);
    return request({
        url: Api.user.login,
        method: "POST",
        data: data
    });
}

/**
 * @注册
 * @param {*} data = {username，pwd，parent_merchant_id，merchant_id，merchant_account}
 */
export function requestUserRegister(data) {
    data = qs.stringify(data);
    return request({
        url: Api.user.register,
        method: "POST",
        data: data
    });
}

/**
 * @获取用户信息
 * @param {*} data = {id}
 */
export function requestUserConfig() {
    return request({
        url: Api.user.userConfig,
        method: "get"
    });
}

/**
 * @获取帐变记录
 * @param {*}
 */
export function requestFundList(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.user.fundList}?${data}`,
        method: "get"
    });
}

/**
 * @获取公告列表
 * @param {*}
 */
export function requestNoticeList(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.user.noticeList}?${data}`,
        method: "get",
    });
}

/**
 * @设置用户接收自动变赔的协议
 * @param {*}
 */
export function getUpdateType(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.user.updateType}?${data}`,
        method: "get",
    });
}

/**
 * @设置用户获取服务器时间
 * @param {*}
 */
 export function requestSystemTime() {
    return request({
        url: `${Api.user.systemTime}`,
        method: "get",
    
    });
}


/**
 * @获取用户当前版本号
 * @param {*} data = {device_type，version}
 */
 export function requestUserver(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.user.userver}?${data}`,
        method: "get",
    });
}

/**
 * @用户设置语言
 * @param {*} data = {lang}
 */
export function langSet(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.user.langSet}?${data}`,
        method: "get",
    });
}


/**
 * @切换皮肤
 * @param {*} data = {lang}
 */
export function themeSet(theme) {
    return request({
        url: `${Api.user.themeSet}?theme=${theme}`,
        method: "get",
    });
}


/**
 * @轮播列表
 */
export function getBannerList() {
    return request({
        url: Api.user.bannerList,
        method: "get",
    });
}
