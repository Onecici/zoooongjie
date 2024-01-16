import request from "./axios";
import Api from "./api";
import qs from "qs";
import { getParams } from '@/assets/scripts/utils'


/**
 * @一般联赛积分榜
 * @param data
 */
export function requestCommonScore(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.commonScore}?${data}`,
        method: "get",
    });
}

/**
 * @小组赛积分榜
 * @param data
 */
 export function requestGroupScore(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.groupScore}?${data}`,
        method: "get",
    });
}

/**
 * @淘汰赛积分榜
 * @param data
 */
 export function requestDisuseScore(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.disuseScore}?${data}`,
        method: "get",
    });
}


/**
 * @虚拟足球列表
 * @param data
 */
export function requestSportsList(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.sportsList}?${data}`,
        method: "get",
    });
}

/**
 * @虚拟足球联赛列表
 * @param data
 */
 export function requestSportsTour(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.sportsTour}?${data}`,
        method: "get",
        // data: data
    });
}

/**
 * @虚拟足球联赛列表
 * @param data
 */
 export function requestSportsResult(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.sportsResult}?${data}`,
        method: "get",
    });
}

/**
 * @获取虚拟赛事视频详情
 * @param data
 */
 export function requestVirtualReplay(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.virtualReplay}?${data}`,
        method: "get",
    });
}

/**
 * @获取虚拟赛事详情
 * @param data
 */
 export function requestVirtualMatchDetail(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.sportsView}?${data}`,
        method: "get",
    });
}


/**
 * @获取虚拟赛事详情
 * @param data
 */
 export function requestOddWinView(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.oddWinView}?${data}`,
        method: "get",
    });
}

/**
 * @获取虚拟足球当前轮赛果
 * @param data
 */
 export function requestBatchNoResult(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.virtualSports.batchNoResult}?${data}`,
        method: "get",
    });
}