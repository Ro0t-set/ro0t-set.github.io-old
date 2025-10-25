<script setup lang="ts">
defineProps<{
    title: string
}>();
</script>

<template>
  <div class="section-title">
    <div class="text-h2 text-center q-mb-lg">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: var(--spacing-xl);
}

.text-h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  padding-bottom: var(--spacing-md);
}

@media (max-width: 599px) {
  .text-h2 {
    font-size: var(--font-size-2xl);
  }
}
</style>