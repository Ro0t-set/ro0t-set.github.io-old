<script setup lang="ts">
import { useAppStore } from "../stores/app";

const store = useAppStore();
</script>

<template>
  <q-card-section
    flat
    bordered
    class="about-me"
  >
    <q-card-section class="text-center">
      <q-avatar
        size="300px"
        class="q-mb-md"
      >
        <q-img
          src="../assets/profile.jpeg"
          spinner-color="primary"
          fit="cover"
          position="center"
          spinner-size="82px"
        />
      </q-avatar>
      <q-card-section>
        <div class="text-center">
          <div class="text-h1 text-center q-mb-lg">
            {{ store.currentDictionary.generalInfo.name }} 
            {{ store.currentDictionary.generalInfo.surname }}
          </div>
          <div class="text-body q-mt-md">
            {{ store.currentDictionary.generalInfo.role }}
          </div>
          <div class="text-caption q-mt-sm">
            {{ store.currentDictionary.generalInfo.description }}
          </div>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card-section>
</template>

<style scoped>
.about-me {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.q-avatar {
  box-shadow: var(--shadow-lg);
}

.q-avatar .q-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

.text-h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
}

.text-body {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
}

.text-caption {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Mobile responsive */
@media (max-width: 599px) {
  .about-me {
    padding: var(--spacing-md);
  }

  .q-avatar {
    width: 200px !important;
    height: 200px !important;
  }

  .text-h1 {
    font-size: var(--font-size-3xl);
  }

  .text-body {
    font-size: var(--font-size-lg);
  }

  .text-caption {
    font-size: var(--font-size-sm);
  }
}
</style>
