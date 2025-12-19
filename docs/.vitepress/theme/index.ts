import DefaultTheme from 'vitepress/theme'
import SalamancaLayout from './components/SalamancaLayout.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: SalamancaLayout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
    },
}
