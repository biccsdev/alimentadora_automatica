<template>
  <div>
    <div class="dashboard-container">
      <Contenedor :porcentaje="datos.restante_contenedor" class="component1" />
      <Porcion :porcionProp="datos.porcion_comida" class="component2" />
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
        restante_contenedor: "",
        porcion_comida: "",
        timer: "",
        horarios: ["", "", ""],
      },
    };
  },
  async mounted() {
    this.datos.porcion_comida = await this.getPorcion();
    this.datos.restante_contenedor = await this.getRestanteContenedor();
    this.datos.horarios = await this.getHorarios();
    this.datos.timer = await this.getTimer();
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
    async getRestanteContenedor() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/contenedor");
        return response.data[0].porcentaje_contenedor;
      } catch (error) {
        console.error(error);
      }
    },
    async getHorarios() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/latest");
        let horarios = [];
        horarios.push(response.data[0].morning.slice(11));
        horarios.push(response.data[0].lunch.slice(11));
        horarios.push(response.data[0].dinner.slice(11));
        return horarios;
      } catch (error) {
        console.error(error);
      }
    },
    async getTimer() {
      const now = new Date();
      let horarios = this.datos.horarios.map((time) => {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes, seconds, 0);
        return date;
      });

      const nextTime = horarios.find((time) => time > now);
      return nextTime
        ? nextTime.toLocaleTimeString()
        : "No upcoming times found";
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
