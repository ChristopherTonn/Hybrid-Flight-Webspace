<template>
  <div>
    <AnimatedBackground />
    <div class="page-header">
      <div class="container">
        <h1>epk</h1>
      </div>
    </div>
    <div class="container">
      <button class="btn" to="/">Back</button>
    </div>

    <NuxtLink to="/"> Back </NuxtLink>
  </div>
</template>

<script>
import AnimatedBackground from '@/components/animated-background.vue';
export default {
  name: 'EPK',
  components: {
    AnimatedBackground,
  },
  data() {
    return {
      // Your data here
    };
  },
  methods: {
    // Your methods here
  },
  computed: {
    // Your computed properties here
  },
  async fetch() {
    // Your async data fetching here
  },
};
</script>

<style scoped>
.page-header {
  background-color: #f5f5f5;
  padding: 1rem;
}

.page-header .container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: bold;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
