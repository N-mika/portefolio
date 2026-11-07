<template>
  <section id="skills" class="py-24 px-4">

    <div class="max-w-6xl mx-auto">

      <!-- HEADER -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary">
          Compétences techniques
        </h2>
        <p class="text-gray-500 mt-2">
          Technologies & outils que j’utilise au quotidien
        </p>
        <div class="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- GRID -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="group bg-white/80 backdrop-blur-md border border-gray-100
          rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
        >

          <!-- HEADER CARD -->
          <div class="flex items-center gap-3 mb-5">

            <div
              class="w-11 h-11 flex items-center justify-center rounded-xl
              bg-primary/10 group-hover:bg-primary/20 transition"
            >
              <component :is="category.icon" class="w-5 h-5 text-primary" />
            </div>

            <h3 class="text-lg font-semibold text-secondary">
              {{ category.title }}
            </h3>

          </div>

          <!-- SKILLS -->
          <div class="flex flex-wrap gap-2">

            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1 text-sm rounded-full
              bg-gray-100 text-gray-600
              hover:bg-primary hover:text-white
              transition cursor-default"
            >
              {{ skill }}
            </span>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>
<script setup lang="ts">
import { h } from 'vue';
import Method from '../assets/icon/measure.svg';
import tools from '../assets/icon/tools.svg';

// Icons as SVG components
const LayoutIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}, [
  h('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', ry: '2' }),
  h('line', { x1: '3', y1: '9', x2: '21', y2: '9' }),
  h('line', { x1: '9', y1: '21', x2: '9', y2: '9' }),
]);

const CodeIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}, [
  h('polyline', { points: '16 18 22 12 16 6' }),
  h('polyline', { points: '8 6 2 12 8 18' }),
]);

const DatabaseIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}, [
  h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
  h('path', { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }),
  h('path', { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' }),
]);

const PaletteIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}, [
  h('circle', { cx: '13.5', cy: '6.5', r: '.5' }),
  h('circle', { cx: '17.5', cy: '10.5', r: '.5' }),
  h('circle', { cx: '8.5', cy: '7.5', r: '.5' }),
  h('circle', { cx: '6.5', cy: '12.5', r: '.5' }),
  h('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z' }),
]);

const skillCategories = [
  {
    title: 'Frontend',
    icon: LayoutIcon,
    skills: ['React.js', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'TailwindCSS', 'SASS'],
  },
  {
    title: 'Backend',
    icon: CodeIcon,
    skills: ['Node.js', 'PHP'],
  },
  {
    title: 'Base de données',
    icon: DatabaseIcon,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Design',
    icon: PaletteIcon,
    skills: ['Figma'],
  },
  {
    title : 'Methodologies',
    icon: Method,
    skills : ['2TUP','Merise','Agil - Scrum','UML']
  },
  {
    title : 'Outils',
    icon: tools,
    skills : ['Visual paradigme','VS Code','Postman','Git/GitHub/GitLab']
  }
];
</script>
