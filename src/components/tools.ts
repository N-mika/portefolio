import { ref } from "vue";


// detect mobile
export const isMobile = ref<boolean>(window.innerWidth < 768)