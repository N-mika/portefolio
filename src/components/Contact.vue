<template>
  <section id="contact" class="py-16 px-4">

    <!-- LOADING OVERLAY -->
    <div v-if="dialog.isloading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div class="w-14 h-14 border-4 border-white/30 border-t-primary rounded-full animate-spin"></div>
    </div>

    <div class="max-w-7xl mx-auto flex flex-col gap-10">

      <!-- HEADER -->
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary">
          Contact
        </h2>
        <p class="text-gray-500 mt-2">Restons en contact</p>
        <div class="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- LEFT CARD -->
        <div class="bg-white shadow-xl flex flex-col gap-2 rounded-2xl p-8 text-center md:text-left">

          <div class="flex flex-col">
            <img src="../assets/Img/contact1.png" class="w-28 h-28 mx-auto md:mx-0 rounded-full shadow-md mb-4" />

            <h3 class="text-2xl font-bold text-secondary">
              NANDRASANA Michaël
            </h3>

            <p class="text-primary font-medium mt-1">
              Développeur Logiciel
            </p>

            <p class="text-gray-500 mt-4">
              Disponible pour vos projets web, mobile et systèmes.
            </p>

          </div>
          <div class="space-y-3 text-sm self-center md:self-start">

            <a href="tel:+261326454167" class="flex gap-2 text-gray-600 hover:text-primary transition">
              <Phone /> <span>+261 32 64 541 67</span>
            </a>

            <a href="mailto:michaelnadrasana@gmail.com" class="flex gap-2 text-gray-600 hover:text-primary transition">
              <Mail /> <span>Email professionnel</span>
            </a>

            <a href="https://wa.me/261326454167" target="_blank"
              class="flex gap-2 text-gray-600 hover:text-primary transition">
              <Icon icon="mdi:whatsapp" class="w-6 h-6" />
              <span>WhatsApp direct</span>
            </a>

          </div>

          <!-- SOCIAL -->
          <div class="mt-6">
            <p class="font-semibold mb-3">Me suivre</p>

            <div class="flex justify-center md:justify-start gap-4">
              <a v-for="(contact, index) in contactInfo" :key="index" :href="contact.link"
                class="p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition">
                <component :is="contact.Icon" class="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT FORM -->
        <form @submit.prevent="onSend" class="bg-white shadow-xl rounded-2xl p-8 space-y-5">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input v-model="form.name" label="Nom" />
            <Input v-model="form.tel" label="Téléphone" />
          </div>

          <Input v-model="form.email" label="Email" type="email" />
          <Input v-model="form.subject" label="Sujet" />

          <div>
            <label class="text-sm font-medium text-gray-600">Message</label>
            <textarea v-model="form.message" rows="5"
              class="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none transition"></textarea>
          </div>

          <button type="submit"
            class="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition active:scale-95">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="dialog.status" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-xl w-[90%] max-w-md overflow-hidden">

        <div class="p-4 bg-primary text-white font-semibold">
          {{ dialog.title }}
        </div>

        <div class="p-6 text-gray-600">
          {{ dialog.message }}
        </div>

        <div class="p-4 flex justify-end">
          <button @click="onClose" class="px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90">
            OK
          </button>
        </div>

      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { contactInfo } from './Info';
import Input from './Input.vue';
import { Mail, Phone } from 'lucide-vue-next';
import { Icon } from '@iconify/vue';

const dialog = ref({
  status: false,
  isloading: false,
  title: "",
  message: "",
});
dialog.value.title = "Erreur";
dialog.value.message = "Une erreur est survenue. Veuillez réessayer.";

const onClose = () => {
  dialog.value.status = !dialog.value.status;
};

const form = ref({
  name: "",
  tel: "",
  email: "",
  subject: "",
  message: "",
});

const onSend = async () => {
  if (!validateForm()) return;
  dialog.value.isloading = true;

  try {
    const response = await fetch("https://formspree.io/f/mzzdbybk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      dialog.value.title = "Succès";
      dialog.value.message = "Votre message a été envoyé avec succès !";
      reset();
    } else {
      dialog.value.title = "Erreur";
      dialog.value.message = "Une erreur est survenue. Veuillez réessayer.";
    }

  } finally {
    dialog.value.isloading = false;
    dialog.value.status = true
  }
};

const reset = () => {
  form.value = { name: "", tel: "", email: "", subject: "", message: "" };
};

const validateForm = () => {
  if (!form.value.name || !form.value.email || !form.value.message) return false;
  if (!/\S+@\S+\.\S+/.test(form.value.email)) return false;
  return true;
};
</script>