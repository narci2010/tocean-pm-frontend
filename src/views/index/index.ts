import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { IndexData } from '@/types/views/index.interface'
// import {  } from "@/components" // 组件
import { themeList } from '@/assets/element/theme/setTheme'

@Component({})
export default class About extends Vue {
  // Getter
  @Getter author
  @Getter theme

  @Action ChangeTheme
  @Action GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: 'index'
  }
  options: any = themeList
  themeV: string = ''

  @Watch('themeV', { deep: true })
  themeT(d) {
    this.ChangeTheme(d)
  }
  created() {
    this.themeV = this.theme
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
