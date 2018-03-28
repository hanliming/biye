import * as types from './types';

const mutations = {
    [types.GET_LOGIN]:(state,data)=>{
        state.isLogin = data;//直接修改数据状态
    },
};

export default mutations;