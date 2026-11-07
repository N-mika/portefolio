<template>
  <section id="experience" class="py-20 px-4">
    <div class="container mx-auto max-w-5xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-semibold text-secondary mb-4">
          Expériences Professionnelles
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            :class="[
              'relative flex flex-col md:flex-row gap-8 items-center',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            ]"
          >
            <!-- Card -->
            <div class="flex-1 bg-white rounded-2xl w-full shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {{ exp.year }}
                    </span>
                  </div>
                  <h3 class="text-xl font-semibold text-secondary mb-1">
                    {{ exp.company }}
                  </h3>
                  <h4 class="text-primary font-medium mb-2">{{ exp.project }}</h4>
                  <p class="text-foreground/70">{{ exp.description }}</p>
                </div>
              </div>
            </div>

            <!-- Timeline Dot -->
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>

            <!-- Spacer -->
            <div class="hidden md:block flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from './Info';


</script>
