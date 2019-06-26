import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { LoginData } from '@/types/views/login.interface'
import * as devos from '@/api/devos'

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // 通过Action装饰很方便访问store中的action
  @Action GET_DATA_ASYN
  // data
  data: LoginData = {
    pageName: 'login page',
    username: ' ',
    password: ' '
  }

  /** 响应鼠标点击事件 */
  testClick(): void {
    // 数据不需要多模块共享，直接在自己的ts中调用后台api
    devos
      .api_cache_get()
      .then((response: any) => {
        console.log(response.msg)
      })
      .catch(response => {
        console.log(response.code)
      })
    this.data.username = 'click name'
  }
  /** 响应鼠标点击事件2 */
  testClick2(): void {
    // 通过Action装饰很方便访问store中的action
    this.GET_DATA_ASYN()
  }
  created() {
    //
  }

  activated() {
    //
  }
  mounted() {
    //
  }
  // 初始化函数
  init() {
    //
  }
}
