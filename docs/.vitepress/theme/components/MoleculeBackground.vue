<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  connections: number[]
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 设置画布尺寸
  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // 化学元素颜色
  const colors = [
    'rgba(0, 230, 118, 0.6)',   // 绿色 - 化学绿
    'rgba(0, 188, 212, 0.6)',   // 青色 - 冰毒蓝
    'rgba(255, 214, 0, 0.4)',   // 黄色 - 危险黄
    'rgba(157, 78, 221, 0.4)',  // 紫色
  ]

  // 创建粒子（分子）
  const particles: Particle[] = []
  const particleCount = Math.min(50, Math.floor(window.innerWidth / 30))

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      connections: []
    })
  }

  // 动画循环
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 更新和绘制粒子
    particles.forEach((particle, i) => {
      // 移动粒子
      particle.x += particle.vx
      particle.y += particle.vy

      // 边界反弹
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      // 绘制粒子（原子）
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // 添加发光效果
      ctx.shadowBlur = 15
      ctx.shadowColor = particle.color
      ctx.fill()
      ctx.shadowBlur = 0

      // 绘制分子键（连接线）
      particles.forEach((other, j) => {
        if (i >= j) return
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.5
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `rgba(0, 230, 118, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="molecule-background"></canvas>
</template>

<style scoped>
.molecule-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}

/* 暗黑模式下更明显 */
.dark .molecule-background {
  opacity: 0.8;
}
</style>
