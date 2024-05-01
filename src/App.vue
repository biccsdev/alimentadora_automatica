<template>
  <div>
    <div class="dashboard-container">
      <Contenedor :porcentaje="datos.restante_contenedor" class="component1" />
      <Porcion :porcion="datos.porcion_comida" class="component2" />
      <Timer :propTime="datos.timer" class="component3" />
      <Horario :horario="datos.horarios" class="component4" />
    </div>
    <div class="graph-container"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      datos: {
        restante_contenedor: "80",
        porcion_comida: "",
        timer: "14:43:00",
        horarios: ["6:00:00", "12:00:00", "6:00:00"],
      },
    };
  },
  async mounted() {
    this.datos.porcion_comida = await this.getPorcion();
    console.log(this.datos.porcion_comida);
  },
  methods: {
    async getPorcion() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/porcion");
        return response.data[0].porcion;
      } catch (error) {
        console.error(error);
      }
    },
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
    // Your props go here
  },
  beforeDestroy() {
    // Code to run before the component is destroyed
  },
};
</script>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 24px;
}

.component1 {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.component2 {
  grid-column: 1;
  grid-row: 2;
}

.component3 {
  grid-column: 2;
  grid-row: 2;
}

.component4 {
  grid-column: 1 / span 2;
  grid-row: 3;
}
</style>
