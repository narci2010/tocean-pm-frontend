import { LoginState } from '@/types/views/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as devos from '@/api/devos'
import { setTheme, defaultTheme } from '@/assets/element/theme/setTheme'

const state: LoginState = {
  author: '三毛',
  theme: defaultTheme
}
// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
  author: (state: LoginState) => state.author,
  theme: (state: LoginState) => state.theme
}
// 更改state
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: LoginState, data: LoginState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return
      }
      state[key] = data[key]
    }
  },
  SET_THEME: (state, theme) => {
    state.theme = theme
  }
}
const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE', data)
  },
  GET_DATA_ASYN({ commit, state: LoginState }) {
    let params: any = {}
    params.paramKey = '1'
    //
    logger.debug('test', 'this.a', 123)
    logger.info('test', 'this.b')
    logger.warn('test')
    logger.error('test')
    logger.fatal('test')
    devos
      .api_cache2_get(params)
      .then((response: any) => {
        console.log(response.msg)
      })
      .catch(response => {
        console.log(response.code)
      })
  }, // 改变用户主题
  ChangeTheme({ commit, state }, theme) {
    commit('SET_THEME', theme)
    setTheme(theme)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
