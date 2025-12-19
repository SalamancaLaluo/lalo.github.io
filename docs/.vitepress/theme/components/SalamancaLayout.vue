<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import MoleculeBackground from './MoleculeBackground.vue'
import SalamancaHero from './SalamancaHero.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
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
    </Layout>
  </div>
</template>

<style scoped>
.salamanca-layout {
  position: relative;
  min-height: 100vh;
}
</style>
