<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const commentRef = ref<HTMLElement | null>(null)

const loadGiscus = () => {
  if (!commentRef.value) return

  // 清除旧的 giscus
  commentRef.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  // ⚠️ 这些配置需要你在 https://giscus.app 生成
  // 请替换为你自己的配置
  script.setAttribute('data-repo', 'SalamancaLaluo/lalo.github.io')
  script.setAttribute('data-repo-id', 'R_kgDOQrlDUw') // 在 giscus.app 获取
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOQrlDU84C0Ag_') // 在 giscus.app 获取
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', isDark.value ? 'dark_tritanopia' : 'light_tritanopia')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')

  commentRef.value.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})

// 监听路由变化，重新加载评论
watch(() => route.path, () => {
  loadGiscus()
})

// 监听主题变化
watch(isDark, () => {
  loadGiscus()
})
</script>

<template>
  <div class="giscus-wrapper">
    <div class="giscus-header">
      <span class="icon">💬</span>
      <span class="title">评论区</span>
    </div>
    <div ref="commentRef" class="giscus-container"></div>
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Courier New', monospace;
}

.giscus-header .icon {
  font-size: 1.5rem;
}

.giscus-header .title {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.giscus-container {
  min-height: 150px;
}

/* 暗黑模式样式 */
.dark .giscus-wrapper {
  border-top-color: rgba(0, 230, 118, 0.2);
}

.dark .giscus-header .title {
  text-shadow: 0 0 10px rgba(0, 230, 118, 0.5);
}
</style>
