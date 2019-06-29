import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { TextitData } from '@/types/views/textit.interface'
// import {  } from "@/components" // 组件
@Component({})
export default class Textit extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN
  // data
  data: TextitData = {
    pageName: 'textit'
  }
  created() {
    //
    this.$log.debug('test', 'this.a', 123)
    this.$log.info('test', 'this.b')
    this.$log.warn('test')
    this.$log.error('test')
    this.$log.fatal('test')
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
