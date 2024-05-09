<template>
  <div>
    <div class="porcion-main-container">
      <img src="/src/assets/icons/timer.svg" width="28px" />
      <div>{{ timeLeftForPropTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date(),
    };
  },
  methods: {
    calculateTimeLeft(propTime) {
      console.log(propTime);
      const now = this.currentTime;
      const propDateTime = new Date(now.toDateString() + " " + propTime);
      if (now > propDateTime) {
        propDateTime.setDate(propDateTime.getDate() + 1);
      }
      const diff = propDateTime - now;
      const hours = Math.floor(diff / 3.6e6);
      const mins = Math.floor((diff % 3.6e6) / 6e4);
      const secs = Math.floor((diff % 6e4) / 1000);
      //   return `${hours} hours, ${mins} minutes, and ${secs} seconds`;
      return `${hours} : ${mins} : ${secs} `;
    },
  },
  computed: {
    timeLeftForPropTime() {
      return this.calculateTimeLeft(this.propTime);
    },
  },
  props: {
    propTime: {
      type: String,
      required: true,
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
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
