import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { IndexData } from '@/types/views/index.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  @Getter author

  @Action GET_DATA_ASYN
  // data
  data: IndexData = {
    pageName: 'index'
  }

  created() {
    console.log(this.author)
    this.GET_DATA_ASYN()
    // .then((response: any) => {
    //   console.log(response.msg)
    // })
    // .catch(response => {
    //   console.log(response.code)
    // })
  }

  activated() {
    //
  }

  mounted() {
    console.log('2:' + this.author)
  }

  // 初始化函数
  init() {
    //
  }
}
