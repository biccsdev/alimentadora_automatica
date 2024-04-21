<template>
  <div>
    <div class="porcion-main-container">
      <img src="/src/assets/icons/plato.svg" width="28px" />
      <div>{{ porcion_data }} gr</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcion_data: this.porcion,
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
    porcion: {
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
  border: 3px solid var(--vt-c-black-mute);
}
</style>
