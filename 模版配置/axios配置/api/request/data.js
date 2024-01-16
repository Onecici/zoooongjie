import request from "./axios";
import Api from "./api";
import qs from "qs";
import { getParams } from '@/assets/scripts/utils'

/**
 * @获取比分网列表前瞻数据
 */
export function requestListForesightData(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.listForesightData}?${data}`,
        method: "get"
    });
}

/**
 * @获取比分网前瞻近期数据
 */
 export function requestForesightComplete(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.foresightComplete}?${data}`,
        method: "get"
    });
}


/**
 * @获取比分网前瞻历史交手
 */
 export function requestForesightFight(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.foresightFight}?${data}`,
        method: "get"
    });
}

/**
 * @获取比分网联赛
 */
export function requestLeague(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.tournamentHistory}?${data}`,
        method: "get"
    });
}

/**
 * @获取比分网联赛数据
 */
export function requestLeagueData(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.tournamentHistoryData}?${data}`,
        method: "get"
    });
}

/**
 * @获取比分网按钮开关状态
 */
 export function requestBifenBtnStatus(data) {
    return request({
        url: `${Api.bifenData.bifenBtnStatus}`,
        method: "get",
        params: data
    });
 }

/**
 * @获取比分网小局数据
 */
 export function requestBifenMatchData(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.matchData}?${data}`,
        method: "get"
    });
 }

 /**
 * @获取比分网经济差
 */
  export function requestBifenAntLines(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.antLines}?${data}`,
        method: "get"
    });
 }

 /**
 * @获取比分网赛程数据
 */
  export function requestBifenAntEvents(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.antEvents}?${data}`,
        method: "get"
    });
 }

  /**
 * @获取比分网直播地址
 */
   export function requestBifenAntVideoUrl(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.antVideoUrl}?${data}`,
        method: "get"
    });
 }
 

  /**
 * @获取比分网CSGO赛程数据
 */
  export function requestBifenCSGOEvents(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.csgoEvents}?${data}`,
        method: "get"
    });
 }
 

  /**
 * @获取比分网CSGO数据栏
 */
  export function requestBifenCsgoMatchData(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.csgoMatchData}?${data}`,
        method: "get"
    });
 }

   /**
 * @获取比分网各类型是否有数据
 */
export function requestBifenTabDataStatus(data) {
    data = qs.stringify(data);
    return request({
        url: `${Api.bifenData.tabDataStatus}?${data}`,
        method: "get"
    });
}