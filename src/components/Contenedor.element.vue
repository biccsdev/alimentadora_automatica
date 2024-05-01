<template>
  <div class="main-contenedor">
    <img src="/src/assets/icons/food.svg" width="28px" />
    <div class="barra">
      <div class="barra-inside" :style="{ width: 100 - porcentaje + '%' }" />
    </div>
    <div>{{ porcentaje }}%</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcentaje_data: this.porcentaje,
    };
  },
  props: {
    porcentaje: { default: null },
  },
};
</script>

<style scoped>
.main-contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: var(--vt-c-black-soft);
  border-radius: 8px;
  padding: 6px 8px;
  height: 70px;
}
.barra {
  width: 70%;
  height: 22px;
  background: linear-gradient(to right, red, orange, yellow, green);
  display: flex;
  justify-content: end;
  border-radius: 8px;
}
.barra-inside {
  height: 100%;
  background-color: var(--vt-c-black);
  border-radius: 0px 8px 8px 0px;
}
</style>
