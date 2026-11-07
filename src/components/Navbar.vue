
<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-3">

      <div class="flex items-center justify-between">

        <!-- LOGO -->
        <div class="flex items-center gap-3">
          <img
            :src="Avatar"
            alt="Avatar de Michaël"
            class="w-10 h-10 rounded-full object-cover border border-gray-200"
          />

          <button
            @click="scrollToSection('hero')"
            class="text-lg font-semibold text-secondary hover:text-primary transition"
          >
            Michaël
          </button>
        </div>

        <!-- DESKTOP NAV -->
        <div class="hidden md:flex items-center gap-8">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="relative flex items-center gap-2 text-sm font-medium transition group"
            :class="activeSection === link.id
              ? 'text-primary'
              : 'text-gray-600 hover:text-primary'"
          >
            <component
              :is="link.icon"
              :size="17"
              :stroke-width="1.8"
            />

            {{ link.label }}

            <!-- ACTIVE INDICATOR -->
            <span
              v-if="activeSection === link.id"
              class="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
            />
          </button>
        </div>

        <!-- MOBILE BUTTON -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
          :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>

      </div>

      <!-- MOBILE MENU -->
      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg p-4"
        >
          <div class="flex flex-col gap-2">

            <button
              v-for="link in navLinks"
              :key="link.id"
              @click="scrollToSection(link.id)"
              class="flex items-center gap-3 text-left px-3 py-3 rounded-xl transition"
              :class="activeSection === link.id
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-gray-600 hover:bg-gray-100'"
            >
              <component
                :is="link.icon"
                :size="19"
                :stroke-width="1.8"
              />

              <span>{{ link.label }}</span>

              <span
                v-if="activeSection === link.id"
                class="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
              />
            </button>

          </div>
        </div>
      </transition>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Avatar from '../assets/Img/profile.png';

import {
  House,
  Code2,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Mail,
  Menu,
  X,
} from 'lucide-vue-next';

// STATES
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('hero');

// NAVIGATION LINKS
const navLinks = [
  { label: 'Accueil', id: 'hero', icon: House },
  { label: 'Compétences', id: 'skills', icon: Code2 },
  { label: 'Expériences', id: 'experience', icon: BriefcaseBusiness },
  { label: 'Projets', id: 'projects', icon: FolderKanban },
  { label: 'Éducation', id: 'education', icon: GraduationCap },
  { label: 'Contact', id: 'contact', icon: Mail },
];

// SCROLL TO SECTION
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    isMobileMenuOpen.value = false;
  }
};

// HANDLE SCROLL
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;

  const scrollPosition = window.scrollY + 120;

  for (const link of navLinks) {
    const element = document.getElementById(link.id);

    if (!element) continue;

    const offsetTop = element.offsetTop;
    const offsetBottom = offsetTop + element.offsetHeight;

    if (
      scrollPosition >= offsetTop &&
      scrollPosition < offsetBottom
    ) {
      activeSection.value = link.id;
      break;
    }
  }
};

// LIFECYCLE
onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
