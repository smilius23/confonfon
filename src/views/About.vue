<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutUs/>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs.vue'

export default {
  name: 'About',
  components: {
    AboutUs
  }
}
</script>
