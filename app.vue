<template>
  <Navbar />
  <div class="container">
    <NuxtPage ref="/"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
      Navbar,
  },
};
</script>