//使用RTK构建store
import { createSlice } from "@reduxjs/toolkit";


const initialState = { // 设置初始的state
    id: 1,
    username: 'kawa',
    email: '123123@qq.com',
}

const userSlice = createSlice({
    name: 'user',// 会自动生成action中的type
    initialState,
    reducers: {//指定state的各种操作  vuex中mutations
        setUsername(state, action) { // state可以直接修改
            state.username = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        }
    }
})


export const { setUsername, setEmail, setId } = userSlice.actions; // 从reducers里获取所有state的操作并导出
export const { reducer: userReducer } = userSlice;