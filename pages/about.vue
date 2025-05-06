<template>
  <div>
    <UContainer class="py-16">
      <UBreadcrumb :items="[
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' }
      ]" class="mb-8" />
      
      <h1 class="text-4xl font-bold mb-6">About Us</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-xl mb-6">
          This is a starter template for Nuxt 3 with Nuxt UI components.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p>
          To provide developers with a beautiful, responsive, and accessible starter template
          that can be used as a foundation for building modern web applications.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Technology Stack</h2>
        <ul>
          <li><strong>Nuxt 3</strong> - The latest version of the intuitive Vue framework</li>
          <li><strong>Nuxt UI</strong> - Beautiful UI components built with Tailwind CSS</li>
          <li><strong>Nuxt Image</strong> - Optimized image handling</li>
          <li><strong>Nuxt Icon</strong> - Easy icon integration</li>
          <li><strong>Nuxt Fonts</strong> - Web font optimization</li>
        </ul>
        
        <UAlert title="Get Started" description="Ready to build your own Nuxt UI application?" color="primary" class="mt-8">
          <template #description>
            <p class="mb-4">Check out the official documentation to learn more.</p>
            <UButton to="https://ui.nuxt.com" target="_blank" color="white" class="mt-2">
              Nuxt UI Docs
            </UButton>
          </template>
        </UAlert>
      </div>
      
      <div class="mt-8">
        <UButton to="/" variant="outline" icon="i-heroicons-arrow-left">
          Back to Home
        </UButton>
      </div>
    </UContainer>
  </div>
</template> 