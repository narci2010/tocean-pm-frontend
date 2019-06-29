import { TextitState } from '@/types/views/textit.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

const state: TextitState = {
  author: '三毛'
}
// 强制使用getter获取state
const getters: GetterTree<TextitState, any> = {
  author: (state: TextitState) => state.author
}
// 更改state
const mutations: MutationTree<TextitState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: TextitState, data: TextitState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}
const actions: ActionTree<TextitState, any> = {
  UPDATE_STATE_ASYN({ commit, state: TextitState }, data: TextitState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Textit.getData()
  // }
}
export default {
  state,
  getters,
  mutations,
  actions
}
