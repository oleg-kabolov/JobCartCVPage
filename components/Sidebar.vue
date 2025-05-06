<template>
  <aside 
    :class="[
      'sidebar border-r transition-all duration-300',
      isCollapsed ? 'w-[70px]' : 'w-[250px]'
    ]"
  >
    <div class="flex flex-col h-full">
      <!-- Logo -->
      <div class="p-4 text-center">
        <img src="/logo.svg" alt="Logo" class="mx-auto" :class="isCollapsed ? 'max-h-10' : 'max-h-14'" />
      </div>
      
      <!-- Menu -->
      <div class="flex-1 overflow-y-auto py-4">
        <UNavigationMenu :items="navLinks" orientation="vertical" :collapsed="isCollapsed" />
      </div>
      
      <!-- Bottom Controls -->
      <div class="border-t p-4">
        <!-- Toggle Theme Button -->
        <div class="mb-4 flex justify-center">
          <UButton 
            :icon="colorMode.value === 'light' ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
            variant="ghost" 
            color="gray" 
            aria-label="Toggle theme" 
            @click="toggleColorMode"
          />
        </div>
        
        <!-- Toggle Sidebar Button -->
        <UButton 
          block
          variant="soft" 
          color="gray" 
          @click="toggleSidebar"
          :icon="isCollapsed ? 'i-heroicons-arrow-right' : 'i-heroicons-arrow-left'"
          size="sm"
        >
          <span v-if="!isCollapsed">Collapse</span>
        </UButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const wpApiUrl = config.public.wordpressApiUrl;

const isCollapsed = ref(false);
const menu = ref<any[]>([]);
const error = ref<string | null>(null);
const colorMode = useColorMode();

// Navigation links computed from WP menu items
const navLinks = computed(() => {
  if (error.value) {
    return [{ label: 'Error loading menu', icon: 'i-heroicons-exclamation-triangle', to: '#' }];
  }
  
  if (menu.value.length === 0) {
    return [{ label: 'Loading...', icon: 'i-heroicons-arrow-path', to: '#' }];
  }
  
  return menu.value.map(item => {
    return {
      label: item.post_title,
      icon: item.icon,
      to: `${item.url}`
    }
  });
});


// Function to toggle sidebar collapse state
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

// Function to toggle theme
function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}

// Fetch menu items from WordPress
onMounted(async () => {
  try {
    // Using standard WP REST API to get pages as menu items
    const response = await fetch(`${wpApiUrl}/menus/87`);
    if (!response.ok) {
      throw new Error('Failed to fetch menu data');
    }
    const data = await response.json();
    menu.value = data || [];
  } catch (err) {
    console.error('Error fetching menu:', err);
    error.value = 'Failed to load menu items';
  }
});

// Expose the collapse state for parent components
defineExpose({
  isCollapsed
});
</script>

<style scoped>
.sidebar {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
</style> 