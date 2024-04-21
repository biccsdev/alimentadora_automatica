<template>
  <div>
    <div class="container-horario">
      <div v-for="(item, index) in horario_data">
        <img :src="item.file" width="28px" height="28px" />
        <div>{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      horario_data: [
        { time: this.horario[0], file: "src/assets/icons/morning.svg" },
        { time: this.horario[1], file: "/src/assets/icons/lunch.svg" },
        { time: this.horario[2], file: "/src/assets/icons/dinner.svg" },
      ],
    };
  },
  methods: {
    // Your methods go here
  },
  computed: {
    // Your computed properties go here
  },
  watch: {
    // Your watchers go here
  },
  components: {
    // Your child components go here
  },
  props: {
    horario: {
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
.container-horario {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  background-color: var(--vt-c-black-soft);
  border-radius: 8px;
  border: 3px solid var(--vt-c-black-mute);

  padding: 6px 8px;
}
</style>
