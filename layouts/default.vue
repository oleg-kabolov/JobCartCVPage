<template>
  <div class="h-screen overflow-hidden flex">
    <!-- Sidebar -->
    <Sidebar ref="sidebarRef" />
    
    <!-- Main Content -->
    <main 
      class="transition-all duration-300 overflow-auto p-5 h-screen w-full" 
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Layout component for the application
const sidebarRef = ref(null);
const sidebarCollapsed = computed(() => sidebarRef.value?.isCollapsed || false);
</script> 