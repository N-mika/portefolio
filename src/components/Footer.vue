<template>
  <footer class="relative bg-[#1e293b] text-gray-300">

    <!-- TOP DECORATION -->
    <!-- <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white/30 to-primary"></div> -->

    <div class="max-w-7xl mx-auto px-6 py-16">

      <div class="grid md:grid-cols-3 gap-12">

        <!-- ABOUT -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-white">À propos</h3>

          <p class="text-sm leading-relaxed text-gray-400">
            Passionné par le développement logiciel et la création d’interfaces modernes.
            J’aime transformer des idées en produits concrets et utiles.
          </p>

          <div class="pt-2 text-xs text-gray-500">
            Disponible pour missions freelance & collaborations.
          </div>
        </div>

        <!-- SOCIAL -->
        <div class="space-y-4">

          <h3 class="text-xl font-semibold text-white">Réseaux</h3>

          <div class="flex flex-wrap gap-3">

            <a
              v-for="(contact, index) in contactInfo"
              :key="index"
              :href="contact.link"
              target="_blank"
              class="group"
            >
              <div
                class="w-11 h-11 flex items-center justify-center rounded-xl
                bg-white/5 border border-white/10
                hover:bg-primary/20 hover:border-primary/40
                transition-all duration-300"
              >
                <component
                  :is="contact.Icon"
                  class="w-5 h-5 text-gray-300 group-hover:text-primary transition"
                />
              </div>
            </a>

          </div>

          <p class="text-xs text-gray-500 pt-2">
            Suivez-moi pour mes projets et updates
          </p>

        </div>

        <!-- CONTACT -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Contact</h3>

          <div class="space-y-3 text-sm">

            <div class="flex items-center gap-2 text-gray-400">
              <Phone></Phone> <span class="text-gray-300">+261 32 64 54 167</span>
            </div>

            <div class="flex items-center gap-2 text-gray-400">
              <Mail /> <span class="text-gray-300">michaelnadrasana@gmail.com</span>
            </div>

            <div class="flex items-center gap-2 text-gray-400">
              <MapPin /> <span class="text-gray-300">Antananarivo, Madagascar</span>
            </div>

          </div>

        </div>

      </div>

      <!-- BOTTOM -->
      <div class="mt-14 pt-6 border-t border-white/10 text-center">

        <p class="text-xs md:text-sm text-gray-500 tracking-wide">
          © {{ currentYear }} NADRASANA Michaël — Built with Vue & TailwindCSS
        </p>

      </div>

    </div>
  </footer>
</template>
<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next';
import { contactInfo } from './Info';
const date = new Date();
const currentYear = date.getFullYear();

</script>

<style scoped>
</style>
