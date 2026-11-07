<template>
  <section id="education" class="py-24 px-4">
    
    <div class="max-w-4xl mx-auto">

      <!-- HEADER -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary">
          Éducation
        </h2>
        <p class="text-gray-500 mt-2">Mon parcours académique</p>
        <div class="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- TIMELINE -->
      <div class="relative border-l-2 border-primary/20 ml-4 space-y-10">

        <div
          v-for="(edu, index) in education"
          :key="index"
          class="relative pl-10 group"
        >

          <!-- DOT -->
          <div
            class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-md group-hover:scale-125 transition"
          ></div>

          <!-- CARD -->
          <div
            class="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >

            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <h3 class="text-xl font-semibold text-secondary">
                {{ edu.degree }}
              </h3>

              <span
                class="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary w-fit"
              >
                {{ edu.year }}
              </span>

            </div>

            <h4 class="text-primary font-medium mt-1">
              {{ edu.school }}
            </h4>

            <p class="text-gray-600 mt-3 leading-relaxed">
              {{ edu.description }}
            </p>

          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { education } from './Info';

</script>
