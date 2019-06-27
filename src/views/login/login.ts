import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { LoginData } from '@/types/views/login.interface'
import * as devos from '@/api/devos'
import { Test } from '@/components' // 组件

@Component({
  components: {
    Test
  }
})
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
    let testObject = {}
    testObject['name'] = 'test'
    testObject['age'] = 25
    testObject['admin'] = true
    let anOther = { color: 'red', height: 15.1 }
    testObject['anOther'] = anOther

    devos
      .api_testObject_post(testObject)
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
    this.data.username = 'click name2'
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
