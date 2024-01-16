let Api = {
    user: {
        userConfig: "/game/balance", //获取用户信息
        fundList: "/game/fundList", //帐变记录
        noticeList: "/game/notice", //公告列表
        bannerList: '/game/broadcast', //轮播列表
        updateType: '/game/odd/updateType', // 用户是否自动接收自动赔率变化
        systemTime: '/game/systemTime', // 用户获取服务器时间
        userver: "/game/userver", // 获取用户版本
        langSet: "/game/langSet", // 设置用户语言
        themeSet: "/game/themeSet", // 设置皮肤
    },
    game: {
        gameList: "/game/nav", // 游戏列表
        matchList: "/game/index", // 赛事列表
        bet: "/game/bet", // 投注
        order: "/game/orderList", //游戏订单
        marketList: "/game/view", // 盘口列表
        gameLimit: "/game/bet/quota", // 限红
        matchMeun: "/game/stat", // 赛事菜单
        getTimer: "/game/getTimer", // 获取滚球赛事计时器
        getTournamentName: "/game/tourName", // 根据联赛ID 查找联赛名称
        matchRecommend:"/game/recommend", // 获取推荐赛事
        images: "/upload/json/pc.json", // 图片资源
        merchantJson: "/game/merchant/tabSetting", // 商户名称、商户logo
        matchState: "/game/matchList", //赛事状态
        gameTour: "/game/tour", // 联赛筛选
        anchorInfo: "/game/anchorInfo", // 主播盘信息
        getGameTeam: "/game/team", // 获取战队名称
        gameWinPrize: "/game/member/prize", // 获取中奖金额
        parlaySet: "/game/parlay/settings", // 获取串注超限设置
        festival: "/game/festival", // 节庆赛事UI
        matchResult: "/game/matchResult", // 赛果详情
        updateDomain: "/game/updateDomain", // 获取资源域名
        userOddGroup: "/game/userOddGroup", // 获取用户赔率分组组别
        asianGamesRecommend: "/game/asianGamesRecommend", // 亚运会赛事列表
        matchTeamSearch: "/game/matchTeamSearch", // 战队搜索 2:赛前,3:滚盘,4:串关,5:赛果)
        teamIndex: "/game/teamIndex", // 队伍名称搜索
        bigMatchList: "/game/bigMatchList", // 吃鸡大赛专题
        bigMatch: "/game/bigMatch", // 吃鸡大赛专题
    },
    activity:{
        activityStatus: "/activity/status", // 会员活动状态
        activityInventory: "/activity/inventory", // 盲盒数量
        activtiyQuest: "/activity/quest", // 任务列表
        bonusRecords: "/activity/bonusRecords", // 奖券记录
        claimBonus: "/activity/claimBonus", // 领取任务奖励
        boxRecords: "/activity/boxRecords", // 盲盒记录
        activityStatic: "/activity/statistic", // 会员统计
        claimBox: "/activity/claimBox", // 兑换盲盒
        activityEntrance: "/activity/entrance", // 活动入口状态
    },
    //虚拟体育
    virtualSports: {
        commonScore: "/game/commonScore", // 一般联赛积分榜
        groupScore: "/game/groupScore", // 小组赛积分榜
        disuseScore: "/game/disuseScore", // 淘汰赛积分榜
        sportsList: "/game/sports/index", // 虚拟足球列表
        sportsTour:"/game/sports/tour", // 联赛列表
        sportsResult: "game/sports/indexResult",// 虚拟体育赛果
        virtualReplay: "/game/virtualRpl",// 虚拟赛事视频详情
        sportsView: "/game/sports/view",// 虚拟赛事详情
        batchNoResult: "/game/sports/batchNoResult", // 赛事列表当前轮赛果
        oddWinView: "/game/sports/oddWinView", //获胜投注项
    },
    // 比分网数据
    bifenData: {
        bifenBtnStatus: "/game/zkBtnStatus", // 比分网按钮开关
        listForesightData: "/game/stats/analysisStat", // 列表前瞻数据
        foresightComplete: "/game/stats/analysisStatComplete", // 详情前瞻近期数据
        foresightFight: "/game/stats/analysisStatFight", // 详情前瞻历史交手
        tournamentHistory: "/game/tournamentHistory", // 历史联赛
        tournamentHistoryData: "/game/tournamentHistoryData", // 联赛数据
        matchData: "/game/stats/matchData", // 详情小局数据
        antLines: "/game/stats/antLines", // 经济差
        antEvents: "/game/ant/events", // 赛事赛程事件
        antVideoUrl: "/game/stats/getVideoList", // 赛事视频直播地址
        csgoEvents: "/game/stats/csgoEvents", //  CSGO实况栏事件数据
        csgoMatchData: "/game/stats/csgoMatchData", //  CSGO数据栏小局数据
        tabDataStatus: "/game/stats/checkShowData", // 比分网各tab有无数据
    },
    // 彩票
    lottery: {
        getTokenAndDomain: "/game/lottery/config", // 获取彩票的token和api域名
        getRecentlylottery: `/coron/api/ticketSourceResult/ticketSourceResultList.json`,
        getBatchRecentlylottery: `/coron//api/ticketSourceResult/getHisOpenCodes`,
        getOrderList: '/coron/ticketmod/orderList',
        djcRecentlyOpenCodes: `/coron/api/ticketSourceResult/djc/getHisOpenCodes`,
        getTraceList: `/coron/ticketmod/traceList`,
        loadIssue:`/coron/ticketmod/currentSaleIssue.json`,
        getTraceDetail: '/coron/ticketmod/traceDetail',
        getOrderDetail: '/coron/ticketmod/orderDetail',
        cancelOrder: '/coron/ticketmod/memberBetCancel',
        cancelOrderByIssue: '/coron/ticketmod/djc/plan/memberBetCancel',
        chaseCancelStatus: `/coron/ticketmod/chase/canCancelByPlanNo`,
        chaseBetCancle: `/coron/ticketmod/chase/memberBetCancel`,
        loadCountDownIssue: `/coron/ticketmod/currentSaleIssue/list`,
        create: `/coron/order/features/create`,
        traceIssues: `/coron/ticketmod/traceIssues`,
        chase: `/coron/order/double/chase`,
        frontquery: `/boracay/member/front/query`,
        frontsave: `/boracay/member/front/save`,
        configQuery: `/coron/system/config/query`,
        frontuserInfo:`/boracay/member/front/userInfo`,
        ticketcfg: '/coron/ticketmod/ticketcfg.json',
    },
};
export default Api;