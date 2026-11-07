<!-- Input.vue -->
<template>
  <div>
    <label class="text-sm font-medium text-gray-600">{{ label }}</label>
    <input
      :type="type"
      v-model="model"
      class="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  type: { default: "text" }
});

const model = defineModel();
</script>