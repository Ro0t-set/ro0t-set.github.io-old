<script setup lang="ts">
import { computed, ref } from 'vue'
import { Language } from '../locale/locale.d'
import { useAppStore } from '../stores/app'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const store = useAppStore()

const toggleButtonLabel = computed(() =>
  store.selectedLang === Language.en ? 'It' : 'En'
)

const mobileMenuOpen = ref(false)

const emit = defineEmits(['scrollToSection'])
function onTabClick(tabName: string) {
  emit('scrollToSection', tabName)
  mobileMenuOpen.value = false
}

function toggleLanguage(event: Event) {
  event.stopPropagation()
  store.toggleLanguage()
}

const isMobile = computed(() => $q.screen.lt.sm)

function getLabel(tabKey: keyof typeof store.currentDictionary.navbar) {
  return store.currentDictionary.navbar[tabKey]
}

const menuItems = computed(() => [
  { name: 'about', icon: 'fas fa-user', label: getLabel('about') },
  { name: 'education-experience', icon: 'fas fa-briefcase', label: getLabel('experience') },
  { name: 'skills', icon: 'fas fa-code', label: getLabel('skills') },
  { name: 'services', icon: 'fas fa-cogs', label: getLabel('services') },
  { name: 'projects', icon: 'fas fa-folder', label: getLabel('projects') },
  { name: 'contact', icon: 'fas fa-envelope', label: getLabel('contact') },
])
</script>

<template>
  <!-- Desktop Navigation -->
  <div
    v-if="!isMobile"
    class="desktop-nav"
  >
    <q-space />
    <q-tabs
      shrink
      stretch
      align="right"
      class="fixed-top bg-primary shadow-1"
    >
      <q-tab
        v-for="item in menuItems"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        :label="item.label"
        @click="onTabClick(item.name)"
      />
      <q-separator vertical />
      <q-btn
        flat
        stack
        icon="fas fa-globe"
        :label="toggleButtonLabel"
        @click="store.toggleLanguage"
      />
    </q-tabs>
  </div>

  <!-- Mobile Navigation -->
  <div
    v-else
    class="mobile-nav"
  >
    <div class="mobile-header bg-primary shadow-1">
      <div class="mobile-toolbar">
        <div class="mobile-title text-weight-bold">
          {{ store.currentDictionary.generalInfo.name }}
        </div>
        <div class="mobile-actions">
          <q-btn
            flat
            dense
            round
            class="header-btn q-mr-sm"
            @click="toggleLanguage"
          >
            <i class="fas fa-globe header-icon" />
            <q-tooltip>{{ toggleButtonLabel }}</q-tooltip>
          </q-btn>
          <q-btn
            flat
            dense
            round
            class="header-btn"
          >
            <i class="fas fa-bars header-icon" />
            <q-menu
              anchor="bottom right"
              self="top right"
              class="mobile-menu"
            >
              <q-list
                style="min-width: 250px"
                class="bg-white"
              >
                <q-item
                  v-for="item in menuItems"
                  :key="item.name"
                  v-close-popup
                  clickable
                  class="menu-item"
                  @click="onTabClick(item.name)"
                >
                  <q-item-section avatar>
                    <i
                      :class="item.icon"
                      class="menu-icon"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="menu-label">
                      {{ item.label }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.desktop-nav .q-tabs {
  z-index: 2000;
}

.desktop-nav .q-tab {
  min-height: 48px;
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
}

.mobile-header {
  width: 100%;
}

.mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  min-height: 56px;
}

.mobile-title {
  color: white;
  font-size: 18px;
  flex: 1;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.header-btn {
  background: rgba(255, 255, 255, 0.05) !important;
}

.header-btn:hover {
  background: rgba(255, 255, 255, 0.15) !important;
}

.header-icon {
  color: #757575 !important;
  font-size: 24px !important;
  display: inline-block !important;
  line-height: 1 !important;
}

.mobile-menu {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.mobile-menu .menu-item {
  padding: 14px 20px;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.mobile-menu .menu-item:last-child {
  border-bottom: none;
}

.mobile-menu .menu-item:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.mobile-menu .menu-label {
  font-size: 16px;
  font-weight: 500;
  color: #424242 !important;
}

.mobile-menu .menu-icon {
  color: #757575 !important;
  font-size: 20px !important;
  width: 24px;
  text-align: center;
}
</style>
