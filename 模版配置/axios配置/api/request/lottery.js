import request from './axios'
import qs from 'qs'
import apiMap from './api';
import LZMAJS from '@/assets/scripts/lzma_worker'
import store from '../store'

const Api = apiMap.lottery

// 获取彩票的token和api域名
export function getTokenAndDomain(){
    return request({
        url: `${Api.getTokenAndDomain}`,
        method: "post"
    });
}

export function loadIssue(param){
    return request({
        method: 'get',
        url: `${Api.loadIssue}?ticketIds=${param}`,
    });
}

export function getTraceDetail(orderId) {
    var data = qs.stringify({ chaseId : orderId }, {allowDots: true});
    return request({
        method: 'post',
        url: Api.getTraceDetail,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data
    });
}

export function getOrderDetail(orderId) {
    var data = qs.stringify({ orderId: orderId }, {allowDots: true});
    return request({
        method: 'post',
        url: Api.getOrderDetail,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data
   });
}

export function getOrderList(data) {
    data = qs.stringify(data, {allowDots: true});
    return request({
        method: 'post',
        url: Api.getOrderList,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data
  });
}

// 投注撤单
export function cancelOrder(orderId) {
    var data = qs.stringify({ orderId: orderId }, {allowDots: true});
    return request({
        method: 'post',
        url: Api.cancelOrder,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data
    });
}


/**
 * 电竞彩 投注撤单
 * @param {*} planNo planNo 期号
 */
export function cancelOrderByIssue(planNo) {
    var data = qs.stringify({planNo:planNo}, { allowDots: true })
    return request({
        method: 'post',
        url: Api.cancelOrderByIssue,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data,
    })
}   


    // 取消追号二次确认(追号详情) ticketId,chaseNum,startPlanId
export function chaseCancelStatus(params) {
    var data = qs.stringify(params, { allowDots: true });
    return request({
        method: 'post',
        url: Api.chaseCancelStatus,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data
    });
}

// 追号撤单确定  type 1 用户自己撤单 , 2 管理员撤单
export function chaseBetCancle(params) {
    var data = qs.stringify({ ...params }, { allowDots: true });
    return request({
        method: 'post',
        url: Api.chaseBetCancle,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data
    });
}

// 历史奖期
export function getRecentlylottery(param) {
    return request.post(Api.getRecentlylottery, param);

}
//批量获取历史奖期
export function getBatchRecentlylottery(data) {
    return request.get(`${Api.getBatchRecentlylottery}?${qs.stringify(data)}`);
}

export function djcRecentlyOpenCodes(data) {
    var data = qs.stringify(data, {allowDots: true});
    return request({
        method: 'get',
        url: `${Api.djcRecentlyOpenCodes}?${data}`,
    });
}


// 追号记录列表
export function getTraceList(param) {
    var data = qs.stringify(param, { allowDots: true });
    return request.post(Api.getTraceList, data);
}

export function loadCountDownIssue(param) {
    var data = qs.stringify(param, {allowDots: true});
    return request({
        method: 'get',
        url: `${Api.loadCountDownIssue}?${data}`,
    });
}

export function eSportBet(data) {
    data.orderSource = 3;
    return request({
        method: 'post',
        url: Api.create,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data, { allowDots: true }),
    })
}
export function getTraceIssues(data){
    return request({
        method: 'post',
        url: Api.traceIssues,
        data: data,
    })
}
export function doubleTrace(data){
    data.orderSource = 3;
    data = qs.stringify(data, {allowDots: true});
    return request({
        method: 'post',
        url: Api.chase,
        headers : {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: data,
        timeout: 15000,
    });
}


export function getUserConfig() {
    return request({
        method: 'get',
        url: `${Api.frontquery}`,
    });
}

export function setUserConfig(data) {
    return request({
        method: 'post',
        url: Api.frontsave,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data, { allowDots: true }),
    });
}
export function getFrontuserInfo() {
    return request({
        url: `${Api.frontuserInfo}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        method: 'post',
    });
}
export function configQuery(){
    return request({
        method: 'get',
        url: Api.configQuery,
    });
}

export function  getTicketCfg(id) {
    return request.get(`${Api.ticketcfg}?ticketId=${id}`);
}