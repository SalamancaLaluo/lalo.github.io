<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 铃铛交互
const bellRings = ref(0)
const isRinging = ref(false)

const ringBell = () => {
  if (isRinging.value) return
  isRinging.value = true
  bellRings.value++

  // 播放铃铛动画
  setTimeout(() => {
    isRinging.value = false
  }, 500)
}

// 打字机效果
const displayText = ref('')
const fullText = 'SALAMANCA'
const typewriterIndex = ref(0)

onMounted(() => {
  const typeWriter = () => {
    if (typewriterIndex.value < fullText.length) {
      displayText.value += fullText.charAt(typewriterIndex.value)
      typewriterIndex.value++
      setTimeout(typeWriter, 150)
    }
  }
  setTimeout(typeWriter, 1000)
})
</script>

<template>
  <div class="salamanca-hero">
    <!-- 元素周期表风格标题 -->
    <div class="element-title">
      <div class="element-box primary">
        <span class="atomic-number">57</span>
        <span class="symbol">La</span>
        <span class="element-name">Lanthanum</span>
        <span class="atomic-mass">138.91</span>
      </div>
      <div class="element-box secondary">
        <span class="atomic-number">84</span>
        <span class="symbol">Lo</span>
        <span class="element-name">Polonium*</span>
        <span class="atomic-mass">208.98</span>
      </div>
    </div>

    <!-- Salamanca 家族名 -->
    <div class="family-name">
      <span class="typing-text">{{ displayText }}</span>
      <span class="cursor">|</span>
    </div>

    <!-- Hector 的铃铛 🛎️ -->
    <div class="bell-container" @click="ringBell">
      <div class="bell" :class="{ ringing: isRinging }">
        🛎️
      </div>
      <div class="bell-hint">{{ bellRings > 0 ? `DING! ×${bellRings}` : 'Click me' }}</div>
    </div>

    <!-- 化学公式装饰 -->
    <div class="chem-formula">
      <span class="formula">C<sub>10</sub>H<sub>15</sub>N</span>
      <span class="purity">99.1% Pure</span>
    </div>

    <!-- 警告标签 -->
    <div class="warning-tags">
      <span class="tag danger">⚠️ PELIGRO</span>
      <span class="tag cartel">CARTEL DEL NORTE</span>
      <span class="tag family">LA FAMILIA</span>
    </div>
  </div>
</template>

<style scoped>
.salamanca-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  z-index: 10;
}

/* 元素周期表标题 */
.element-title {
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
}

.element-box {
  width: 140px;
  height: 160px;
  border: 3px solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  cursor: default;
}

.element-box.primary {
  border-color: #00e676;
  background: linear-gradient(135deg, rgba(0, 230, 118, 0.1), rgba(0, 200, 83, 0.05));
  box-shadow:
    0 0 20px rgba(0, 230, 118, 0.3),
    inset 0 0 30px rgba(0, 230, 118, 0.1);
}

.element-box.secondary {
  border-color: #00bcd4;
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(0, 150, 170, 0.05));
  box-shadow:
    0 0 20px rgba(0, 188, 212, 0.3),
    inset 0 0 30px rgba(0, 188, 212, 0.1);
}

.element-box:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow:
    0 0 40px rgba(0, 230, 118, 0.5),
    inset 0 0 40px rgba(0, 230, 118, 0.2);
}

.atomic-number {
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
  opacity: 0.9;
}

.symbol {
  font-size: 64px;
  font-weight: bold;
  line-height: 1;
}

.element-box.primary .symbol { color: #00e676; }
.element-box.secondary .symbol { color: #00bcd4; }

.element-name {
  font-size: 13px;
  font-weight: 600;
  opacity: 0.85;
  margin-top: 4px;
}

.atomic-mass {
  position: absolute;
  bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
}

/* 家族名打字效果 */
.family-name {
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 10px;
  color: #ffd600;
  margin: 1.5rem 0;
  text-shadow: 0 0 20px rgba(255, 214, 0, 0.5);
}

.cursor {
  animation: blink 1s infinite;
  color: #00e676;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 铃铛 */
.bell-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  cursor: pointer;
}

.bell {
  font-size: 48px;
  transition: transform 0.1s ease;
  filter: drop-shadow(0 0 10px rgba(255, 214, 0, 0.5));
}

.bell.ringing {
  animation: ring 0.1s ease-in-out 3;
}

@keyframes ring {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
}

.bell-hint {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  color: #ffd600;
  margin-top: 8px;
  opacity: 0.9;
}

/* 化学公式 */
.chem-formula {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.formula {
  font-size: 1.4rem;
  font-weight: 600;
  color: #00bcd4;
  padding: 10px 20px;
  border: 2px solid rgba(0, 188, 212, 0.5);
  border-radius: 4px;
  background: rgba(0, 188, 212, 0.1);
}

.purity {
  font-size: 1.3rem;
  color: #00e676;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 230, 118, 0.5);
}

/* 警告标签 */
.warning-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 1rem;
}

.tag {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tag.danger {
  background: #d50000;
  color: white;
  animation: pulse-danger 2s infinite;
}

.tag.cartel {
  background: linear-gradient(135deg, #1b5e20, #00c853);
  color: white;
  border: 1px solid #00e676;
}

.tag.family {
  background: linear-gradient(135deg, #ff6f00, #ffd600);
  color: #1a1a1a;
}

@keyframes pulse-danger {
  0%, 100% { box-shadow: 0 0 5px rgba(213, 0, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(213, 0, 0, 0.8); }
}

/* 响应式 */
@media (max-width: 640px) {
  .element-box {
    width: 110px;
    height: 130px;
  }
  .symbol {
    font-size: 48px;
  }
  .atomic-number {
    font-size: 14px;
  }
  .element-name {
    font-size: 11px;
  }
  .atomic-mass {
    font-size: 12px;
  }
  .family-name {
    font-size: 1.3rem;
    letter-spacing: 6px;
  }
  .tag {
    font-size: 11px;
    padding: 6px 12px;
  }
}
</style>
