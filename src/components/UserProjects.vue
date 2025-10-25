<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SectionTitle from './utility/SectionTitle.vue'

const store = useAppStore()
</script>

<template>
  <div class="projects q-pa-md">
    <SectionTitle :title="store.currentDictionary.projects.projectTitle" />
    <div class="row q-col-gutter-md justify-center">
      <div
        v-for="project in store.currentDictionary.projects.projects" 
        :key="project.title"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card
          flat
          bordered
          class="project-card"
        >
          <q-card-section>
            <div class="text-h6 ellipsis-2-lines">
              {{ project.title }}
            </div>
            <q-separator class="q-my-sm" />
            <div class="text-body2 description-container">
              {{ project.description }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none tech-section">
            <div class="text-subtitle2 q-mb-xs">
              Technologies:
            </div>
            <div class="text-caption">
              {{ project.technologies }}
            </div>
          </q-card-section>

          <q-card-actions
            align="right"
            class="q-mt-auto"
          >
            <q-btn
              flat
              color="secondary"
              :href="project.url"
              target="_blank"
              label="View Project"
              icon="fas fa-external-link-alt"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.project-card .q-card__section:first-child {
  flex-grow: 1;
  overflow: hidden;
}

.description-container {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
}

.tech-section {
  min-height: 80px;
  overflow: hidden;
}

.tech-section .text-caption {
  word-wrap: break-word;
  word-break: break-word;
}

.q-card__actions {
  margin-top: auto;
  padding: 8px 16px !important;
  flex-shrink: 0;
}

.q-card__actions .q-btn {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 599px) {
  .project-card {
    height: auto;
    min-height: 300px;
  }

  .q-card__actions .q-btn {
    font-size: 0.875rem;
    padding: 6px 12px;
  }
}
</style>