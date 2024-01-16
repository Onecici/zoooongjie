import request from "./axios";
import Api from "./api";
import qs from "qs";
import { getParams, getNDate } from '@/assets/scripts/utils'
import store from "@/store";
import md5 from "js-md5";

/**
 * @获取游戏列表
 */
export function requestGameList() {
    return request({
        url: Api.game.gameList,
        method: "get"
    });
}

/**
 * @获取赛事列表
 * @param data
 */
export function requestMatchList(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.matchList}?${data}`,
        method: "get"
    });
}

/**
 * @获取赛事状态列表
 * @param data
 */
export function requestMatchState(data) {
    data = qs.stringify( data, { encode:false });
    data = data.replaceAll(/b/g, '');
    return request({
        url: `${Api.game.matchState}`,
        method: "post",
        data: data
    });
}



/**
 * @获取盘口列表
 * @param data
 */
export function requestMarketList(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.marketList}?${data}`,
        method: "get"
    });
}

/**
 * @限红
 * @param data
 */
export function requestGameLimit(data) {
    // data = qs.stringify(data);
    return request({
        url: `${Api.game.gameLimit}`,
        method: "post",
        data: data
    });
}

/**
 * @获取串注超限设置
 * @param data
 */
 export function requestParlaySet(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.parlaySet}`,
        method: "get",
    });
}


/**
 * @投注接口
 * @param data
 */

export function requestBet(data) {
    const token = store.state.user.token;
    const { secret_key, uid } = store.state.user.userInfo;
    const time_stamp = parseInt(new Date().getTime()/1000);
    data = {
        ...data,
        secret_key: md5((`${token}_${time_stamp}_${uid}_${secret_key}`).toUpperCase()),
        time_stamp: time_stamp,
    }
    data = qs.stringify(data);
    return request({
        url: `${Api.game.bet}`,
        method: "post",
        data: data
    });
}

/**
 * @投注记录
 * @param {String} market_id    赛事ID
 * @param {String} status       注单状态: 1 表示未结算; 2 表示已经结算;
 * @param {String} type         注单类型，1 单注; 2串关
 * @param {String} begin_time   开始时间 精确到秒
 * @param {String} end_time     结束时间 精确到秒
 * @param {String} page         页数
 * @param {String} page_size    页面大小
 *
 */
export function requestOrder(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.order}?${data}`,
        method: "get"
    });
}

/**
 * 获取战队名称
 * @param {*} data = {ids}
 */
 export function requestGameTeam(data) {
    return request({
        url: Api.game.getGameTeam,
        method: "post",
        data: getParams(data)
    });
}


/**
 * 获取计时器
 * @param {*} data = {ids}
 */
export function requestTimer() {
    return request({
        url: `${Api.game.getTimer}`,
        method: "get",
    });
}

/**
 * 根据联赛ID查找联赛名称
 * @param {*} data = {ids}
 */
export function requestTournamentName(data) {
    data = {
        ...data
    }
    data = qs.stringify( data, {encode:false });
    return request({
        url: `${Api.game.getTournamentName}`,
        method: "POST",
        data: data
    });
}

/**
 * @获取赛事菜单
 */
export function requestMatchMeun(data) {
    data = qs.stringify( data, {encode:false });
    return request({
        url: `${Api.game.matchMeun}?${data}`,
        method: "get"
    });
}


/**
 * @推荐赛事 
 * **/
export function requestMatchRecommend() {
    return request({
        url: `${Api.game.matchRecommend}`,
        method: "get"
    });
}


/**
 * @获取所有图片
 * **/
export function requestImages() {
    return request({
        url: `${Api.game.images}`,
        method: "get",
        baseURL: isDevMode ? "" : UPLOAD_URL
    });
}


/**
 * @获取商户的title和logo
 * **/
export function requestMerchantJson(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.merchantJson}?${data}`,
        method: "get",
    });

}


/**
 * @联赛筛选
 * **/
export function requestGameTour(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.gameTour}?${data}`,
        method: "get",
    });
}

/**
 * @主播盘信息
 * **/
export function requestAnchorInfo(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.anchorInfo}?${data}`,
        method: "post",
        data: data,
    });
}

/**
 * @获取游戏中奖金额
 * **/
export function requestGameWinPrize() {
    return request({
        url: Api.game.gameWinPrize,
        method: "get"
    });
}

/**
 * @获取节庆赛事UI
 * **/
export function requestGameFestival() {
    return request({
        url: Api.game.festival,
        method: "get"
    });
}

/**
 * @获取获取盘口信息
 */
export function getMatchResult(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.matchResult}?${data}`,
        method: "get"
    });
}

/**
 * @获取资源域名
 * @param data
 */
 export function requestUpdateDomain(data) {
    const {domain} = data;
    return request({
        url: `${domain}${Api.game.updateDomain}`,
        method: "get"
    });
}


/**
 * @获取用户赔率分组组别
 */
export function requestUserOddGroup() {
    return request({
        url: `${Api.game.userOddGroup}`,
        method: "get"
    });
}

/**
 * @亚运会赛事列表
 * **/
export function requestAsianGamesRecommend() {
    return request({
        url: `${Api.game.asianGamesRecommend}`,
        method: "get"
    });
}


/**
 * @战队搜索    
 * @param game_id      游戏ID（0表示全部游戏）      
 * @param flag         2:赛前,3:滚盘,4:串关,5:赛果
 * @param page_size
 * @param page
 * @param team_name   队伍名称
 * @param date        日期
 */
export function requestMatchTeamSearch(data) {
    if( data.date != -1 ){
        data = {
            ...data,
            date: data.flag == 2 ? getNDate(-data.date) : getNDate(data.date)
        }
    }else{
        delete data.date
    }
    
    data = qs.stringify(data);
    return request({
        url: `${Api.game.matchTeamSearch}?${data}`,
        method: "get"
    });
}

/**
 * @队伍名称搜索
 * @param team_name   队伍名称
 */
export function requestTeamIndex(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.teamIndex}?${data}`,
        method: "get"
    });
}
/**
* @吃鸡大赛列表
* match_id 赛事id
* **/
export function requestBigMatchList(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.bigMatchList}?${data}`,
        method: "get"
    });
 } 
 
/**
* @吃鸡大赛专题
* match_id 赛事id
* **/
export function requestBigMatch(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.game.bigMatch}?${data}`,
        method: "get"
    });
 }   
