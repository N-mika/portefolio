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
            alt="avatar"
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
            class="relative text-sm font-medium transition group"
            :class="activeSection === link.id
              ? 'text-primary'
              : 'text-gray-600 hover:text-primary'"
          >

            {{ link.label }}

            <!-- ACTIVE INDICATOR -->
            <span
              v-if="activeSection === link.id"
              class="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
            ></span>

          </button>

        </div>

        <!-- MOBILE BUTTON -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
        >
          <svg v-if="isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>

          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

      </div>

      <!-- MOBILE MENU -->
      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg p-4"
        >

          <div class="flex flex-col gap-3">

            <button
              v-for="link in navLinks"
              :key="link.id"
              @click="scrollToSection(link.id)"
              class="text-left px-3 py-2 rounded-xl transition"
              :class="activeSection === link.id
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-gray-600 hover:bg-gray-100'"
            >
              {{ link.label }}
            </button>

          </div>

        </div>
      </transition>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Avatar from '../assets/Img/profile.png'

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('hero');

const navLinks = [
  { label: 'Accueil', id: 'hero' },
  // { label: 'À propos', id: 'about' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Expériences', id: 'experience' },
  { label: 'Projets', id: 'projects' },
  { label: 'Éducation', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMobileMenuOpen.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;

  // Détecter la section active
  const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const scrollPosition = window.scrollY + 100;

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
