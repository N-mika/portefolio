<template>
  <section id="projects" class="py-20 px-4">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-semibold text-secondary mb-4">
          Projets et realisation
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <!-- pagination-aware grid with CSS animation only -->
      <div @mouseenter="stopAutoplay" @mouseleave="startAutoplay" class="md:h-full">
        <div :key="currentPage" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, idx) in currentProjects" :key="`${project.title}-${animKey}-${idx}`"
            class="card overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer rounded-2xl border-0 shadow-lg bg-white">
            <div class="relative h-48 overflow-hidden bg-accent">
              <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a :href="project.link" target="_blank" v-if="project.link">
                  <SvgLink></SvgLink>
                </a>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-2">
              <h3 class="text-xl font-semibold text-secondary mb-2">
                {{ project.title }}
              </h3>
              <p class="text-foreground/70 mb-4 line-clamp-2">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag"
                  class="rounded-full px-4 py-2 bg-accent text-secondary hover:bg-primary hover:text-white transition-colors text-sm font-medium">
                  {{ tag }}
                </span>
              </div>
              <a :href="project.link" target="_blank" v-if="project.link && isMobile"
                class="flex items-center justify-center self-end gap-2 px-3 py-1.5 bg-primary text-white rounded-xl shadow hover:bg-primary/80 transition">
                Explorer
                <SvgLink />
              </a>
            </div>
          </div>
        </div>

        <!-- pagination dots -->
        <!-- pagination only if NOT mobile -->
        <div v-if="!isMobile" class="mt-8 flex items-center justify-center gap-3">
          <button @click="prevPage" :disabled="currentPage === 1"
            class="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
            Préc.
          </button>

          <div class="flex items-center gap-2">
            <button v-for="p in totalPages" :key="p" @click="goTo(p)"
              :aria-current="currentPage === p ? 'true' : 'false'"
              class="w-3 h-3 rounded-full transition-all duration-200"
              :class="currentPage === p ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'">
            </button>
          </div>

          <button @click="nextPage" :disabled="currentPage === totalPages"
            class="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
            Suiv.
          </button>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { projects } from './Info'
import SvgLink from '../assets/icon/link.svg'
import { isMobile } from './tools'

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

// pagination logic only for desktop
const perPage = 3
const currentPage = ref<number>(1)

const totalPages = computed(() =>
  isMobile.value ? 1 : Math.max(1, Math.ceil(projects.length / perPage))
)

const pageStart = computed(() =>
  isMobile.value ? 0 : (currentPage.value - 1) * perPage
)

const currentProjects = computed(() =>
  isMobile.value
    ? projects // show all
    : projects.slice(pageStart.value, pageStart.value + perPage)
)

// animation key
const animKey = ref<number>(Date.now())

watch(currentPage, () => {
  if (!isMobile.value) animKey.value = Date.now()
})

// autoplay only on desktop
const autoplayDelay = 8000
let intervalId: number | null = null

const startAutoplay = () => {
  if (isMobile.value) return // no autoplay on mobile
  if (intervalId !== null) return
  intervalId = window.setInterval(() => {
    currentPage.value =
      currentPage.value < totalPages.value ? currentPage.value + 1 : 1
  }, autoplayDelay)
}

const stopAutoplay = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  if (!isMobile.value) setTimeout(() => startAutoplay(), 800)
}

// onMounted(() => startAutoplay())
onBeforeUnmount(() => stopAutoplay())

// navigation
const goTo = (p: number) => {
  if (!isMobile.value && p >= 1 && p <= totalPages.value) {
    currentPage.value = p
    resetAutoplay()
  }
}

const prevPage = () => {
  if (!isMobile.value && currentPage.value > 1) {
    currentPage.value--
    resetAutoplay()
  }
}

const nextPage = () => {
  if (!isMobile.value && currentPage.value < totalPages.value) {
    currentPage.value++
    resetAutoplay()
  }
}
</script>


<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* CSS-only card animation */
.card {
  animation: cardIn 360ms cubic-bezier(.2, .9, .2, 1) both;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(.99);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* dots styles */
button[aria-current="true"] {
  outline: none;
}
</style>