import Api from "./api";
import request from "./axios";
import qs from "qs";

/**
 * @会员活动状态
 */
 export function getActivityStatus() {
    return request({
        url: Api.activity.activityStatus,
        method: "get"
    });
}

/**
 * @盲盒数量
 */
 export function getActivityInventory() {
    return request({
        url: Api.activity.activityInventory,
        method: "get"
    });
}

/**
 * @任务列表
 */
export function getQuestList(data) {
    data = qs.stringify(data);
    return request({
            url: `${Api.activity.activtiyQuest}?${data}`,
            method: "get"
    });
}

/**
 * @奖券记录
 */
export function getBonusRecords(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.activity.bonusRecords}?${data}`,
        method: "get",
    });
}

/**
 * @领取任务奖励
 */
 export function claimBonus(data) {
    data = qs.stringify(data);
    return request({
        url: Api.activity.claimBonus,
        method: "POST",
        data: data
    });
}

/**
 * @活动入口状态
 */
 export function getEntranceStatus(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.activity.activityEntrance}?${data}`,
        method: "get",
    });
}

/**
 * @盲盒记录
 */
 export function getBoxRecords(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.activity.boxRecords}?${data}`,
        method: "get",
    });
}

/**
 * @会员统计
 */
 export function getActivityStatic() {
    return request({
        url: Api.activity.activityStatic,
        method: "get",
    });
}

/**
 * @兑换盲盒
 */
 export function claimBox(data) {
    data = qs.stringify(data);
    return request({
        url: Api.activity.claimBox,
        method: "POST",
        data: data
    });
}

/**
 * @获取oss加密域名
 */
 export function getOssUrl(url) {
    return request({
        url: url,
        method: "get"
    });
}