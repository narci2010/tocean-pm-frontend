import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getItem } from '@/utils/common'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    // 对象的解构语法
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  locale: getItem('language') || 'en', // set locale zh/en
  messages // set locale messages
})

export default i18n
