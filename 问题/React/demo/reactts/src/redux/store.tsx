import { configureStore } from "@reduxjs/toolkit";

// 将所有reducer处理模块存入store配置中 这样全局就可以通过reducer来改变state值
import { userReducer } from "./Slice/user";


export default configureStore({
    reducer: {
        userReducer,
    },
})