<template>
  <section id="hero" class="min-h-screen mt-16 md:mt-8 flex items-center px-4">

    <div class="max-w-7xl mx-auto w-full">

      <div class="grid lg:grid-cols-2 gap-14 items-center">

        <!-- LEFT -->
        <div class="space-y-6">

          <p class="text-primary font-medium tracking-wide">
            👋 Bienvenue dans mon univers
          </p>

          <h1 class="text-4xl md:text-6xl font-bold text-secondary leading-tight">
            Bonjour, je suis <br />
            <span class="text-primary">NANDRASANA Michaël</span>
          </h1>

          <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
            Développeur logiciel spécialisé en <strong>Vue, React, Node.js </strong> avec<strong> Typescript.</strong>
            Je transforme des idées en applications modernes, rapides et scalables.
          </p>

          <div class="flex flex-wrap gap-2 text-sm text-gray-500">
            <span class="px-3 py-1 bg-gray-100 rounded-full">JavaScript</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full">TypeScript</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full">Vue</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full">React</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full">Node.js</span>
          </div>

          <p class="text-primary font-semibold flex">
            <MapPin /> Antananarivo, Madagascar
          </p>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">

            <button @click="scrollToContact" class="px-6 py-3 bg-primary text-white rounded-xl font-semibold
              hover:scale-105 transition active:scale-95">
              Me contacter
            </button>

            <a href="/Nandrasana_Michael_7.pdf" target="_blank">
              <button class="px-6 py-3 border border-secondary text-secondary rounded-xl
                hover:bg-secondary hover:text-white transition font-medium">
                Télécharger CV
              </button>
            </a>

          </div>

        </div>

        <!-- RIGHT -->
        <div class="relative flex justify-center">

          <!-- IMAGE -->
          <div class="relative">

            <div class="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <img :src="profileImage" alt="profile" class="w-full h-full object-cover" />
            </div>

            <!-- FLOAT BADGE -->
            <div class="absolute -bottom-6 -right-6 bg-white shadow-xl border border-gray-100
              rounded-2xl px-4 py-3 flex items-center gap-2">
              <span class="text-2xl">👨‍💻</span>
              <span class="text-sm font-medium text-gray-600">
                Dev Full Stack
              </span>
            </div>

          </div>

        </div>

      </div>

      <!-- SCROLL INDICATOR -->
      <div v-if="!isMobile" class="flex justify-center mt-14 animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div class="w-1 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
import profileImage from '../assets/Img/profile.png';
import { isMobile } from "./tools"

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
