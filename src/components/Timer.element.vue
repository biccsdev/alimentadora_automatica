<template>
  <div>
    <div class="porcion-main-container">
      <img src="/src/assets/icons/timer.svg" width="28px" />
      <div>{{ time_data }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time_data: this.time_left,
    };
  },
  methods: {
    // Your methods go here
  },
  computed: {},
  watch: {
    // Your watchers go here
  },
  components: {
    // Your child components go here
  },
  props: {
    time_left: {
      default: null,
    },
  },
  mounted() {
    // Code to run when the component is mounted
  },
  beforeDestroy() {
    // Code to run before the component is destroyed
  },
};
</script>

<style scoped>
.porcion-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: var(--vt-c-black-soft);
  border-radius: 8px;
  padding: 6px 8px;
}
</style>
