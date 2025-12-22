import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import GiscusComment from './components/GiscusComment.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 在文档底部添加评论区
      'doc-after': () => h(GiscusComment)
    })
  }
}
