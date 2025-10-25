<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SectionTitle from './utility/SectionTitle.vue'

const store = useAppStore()
</script>

<template>
  <div class="services q-pa-md">
    <SectionTitle :title="store.currentDictionary.services.serviceTitle" />
    <div class="row q-col-gutter-md justify-center">
      <div
        v-for="service in store.currentDictionary.services.services"
        :key="service.title"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card
          flat
          bordered
          class="service-card"
        >
          <q-card-section>
            <div class="text-h6 ellipsis-2-lines">
              {{ service.title }}
            </div>
            <div
              v-if="service.category"
              class="text-caption text-grey-7 q-mt-xs"
            >
              {{ service.category }}
            </div>
            <q-separator class="q-my-sm" />
            <div class="text-body2 description-container">
              {{ service.description }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none tech-section">
            <div class="text-subtitle2 q-mb-xs">
              Technologies:
            </div>
            <div class="text-caption">
              {{ service.technologies }}
            </div>
          </q-card-section>

          <q-card-actions
            v-if="service.url"
            align="right"
            class="q-mt-auto"
          >
            <q-btn
              flat
              color="secondary"
              :href="service.url"
              target="_blank"
              label="Learn More"
              icon="fas fa-arrow-right"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  height: 380px;
  display: flex;
  flex-direction: column;
}

.service-card .q-card__section:first-child {
  flex-grow: 1;
}

.description-container {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-section {
  min-height: 80px;
}

.q-card__actions {
  margin-top: auto;
}
</style>
