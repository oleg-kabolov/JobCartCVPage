<template>
  <div>
    <UCard class="mb-4">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold">Привет, Nuxt UI!</h2>
          <UButton 
            :icon="colorMode.value === 'light' ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
            variant="ghost" 
            color="gray" 
            aria-label="Сменить тему" 
            @click="toggleColorMode"
          />
        </div>
      </template>
      <p>Это демонстрация работы стилей Nuxt UI и Tailwind CSS.</p>
      <template #footer>
        <UButton color="primary">Нажми меня</UButton>
      </template>
    </UCard>

    <div class="h-px bg-gray-200 dark:bg-gray-800 my-6"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Компонент 1</h3>
        </template>
        <p>Этот компонент использует стили Tailwind CSS.</p>
      </UCard>
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Компонент 2</h3>
        </template>
        <p>А также компоненты из библиотеки Nuxt UI.</p>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 