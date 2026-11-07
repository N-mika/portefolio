<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <!-- <About /> -->
    <Skills class="bg-accent/30"/>
    <Experience />
    <Projects class="bg-accent/30"/>
    <Education />
    <Contact class="bg-accent/30"></Contact>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
// import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
</script>
