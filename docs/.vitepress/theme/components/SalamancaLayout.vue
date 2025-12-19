<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import MoleculeBackground from './MoleculeBackground.vue'
import SalamancaHero from './SalamancaHero.vue'
import GiscusComment from './GiscusComment.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

// 判断是否显示评论（首页不显示）
const showComment = () => {
  return frontmatter.value.layout !== 'home' && frontmatter.value.comment !== false
}
</script>

<template>
  <div class="salamanca-layout">
    <!-- 化学分子粒子背景 -->
    <MoleculeBackground />

    <!-- 默认布局 -->
    <Layout>
      <template #home-hero-before>
        <SalamancaHero v-if="frontmatter.layout === 'home'" />
      </template>

      <!-- 文章底部评论区 -->
      <template #doc-after>
        <GiscusComment v-if="showComment()" />
      </template>
    </Layout>
  </div>
</template>

<style scoped>
.salamanca-layout {
  position: relative;
  min-height: 100vh;
}
</style>
