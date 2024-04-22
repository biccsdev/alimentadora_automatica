<template>
  <div>
    <div class="container-horario" @click="openContainer">
      <div
        v-for="(item, index) in horario_data"
        style="display: flex; align-items: center; flex-direction: column"
      >
        <img :src="item.file" width="28px" height="28px" />
        <div>{{ item.time }}</div>
      </div>
    </div>
    <div v-if="showContainer" class="container" @click="closeContainer">
      <div class="content" @click.stop>
        <div style="text-align: center">Horario</div>
        <div class="input-container" v-for="(item, index) in horario_data">
          <img :src="item.file" width="28px" />
          <div style="width: auto; display: flex; gap: 12px">
            <input
              type="text"
              style="width: 90px; padding: 4px"
              v-model="item.time"
              @input="item.showButton = true"
            />
            <button
              v-if="item.showButton"
              @click="sendData(item)"
              style="
                background-color: #8ec48e;
                width: 28px;
                height: 28px;
                border-radius: 4px;
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      horario_data: [
        {
          time: this.horario[0],
          file: "src/assets/icons/morning.svg",
          showButton: false,
        },
        {
          time: this.horario[1],
          file: "/src/assets/icons/lunch.svg",
          showButton: false,
        },
        {
          time: this.horario[2],
          file: "/src/assets/icons/dinner.svg",
          showButton: false,
        },
      ],
      showContainer: false,
    };
  },
  methods: {
    openContainer() {
      this.showContainer = true;
    },
    closeContainer() {
      this.showContainer = false;
    },
    sendData(item) {
      item.showButton = false;
      // replace 'your_api_url' with the actual API URL
      fetch("your_api_url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: item.time }),
      });
    },
  },
  props: {
    horario: {
      default: null,
    },
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
.input-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 80%;
  height: 80%;
  background-color: var(--vt-c-black-soft);
  border-radius: 4px;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  gap: 36px;
}

@media screen and (max-width: 600px) {
  .content {
    width: 80%;
  }
}

@media screen and (min-width: 601px) {
  .content {
    width: 50%;
    height: 50%;
  }
}
</style>
