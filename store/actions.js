import * as types from './types';

const actions = {
    saveState:({commit},data)=>{
        commit(types.GET_LOGIN,data);//提交到mutations中
    },
}

export default actions;