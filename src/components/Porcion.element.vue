<template>
  <div>
    <div class="porcion-main-container" @click="openContainer">
      <img src="/src/assets/icons/plato.svg" width="28px" />
      <div>{{ porcion_data }} gr</div>
    </div>
    <div v-if="showContainer" class="container" @click="closeContainer">
      <div class="content" @click.stop>
        <div style="text-align: center">Alimentacion</div>
        <div class="input-container">
          <img src="/src/assets/icons/plato.svg" width="28px" />
          <div style="width: auto; display: flex; gap: 12px">
            <input
              type="text"
              style="width: 90px; padding: 4px"
              v-model="porcion_data"
              @input="showButton = true"
            />
            <button
              v-if="showButton"
              @click="sendData"
              style="
                background-color: #8ec48e;
                width: 28px;
                height: 28px;
                border-radius: 4px;
              "
            />
          </div>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <img src="/src/assets/icons/morning.svg" width="28px" />
                </th>
                <th><img src="/src/assets/icons/lunch.svg" width="28px" /></th>
                <th><img src="/src/assets/icons/dinner.svg" width="28px" /></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.timedate">
                <td>{{ getDate(item.timedate) }}</td>
                <td :class="getColor(item.morning)">{{ item.morning }}%</td>
                <td :class="getColor(item.lunch)">{{ item.lunch }}%</td>
                <td :class="getColor(item.dinner)">{{ item.dinner }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcion_data: this.porcion,
      showContainer: false,
      showButton: false,
      data: [
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        {
          timedate: "2024-04-21",
          morning: 50,
          lunch: 70,
          dinner: 80,
        },
        {
          timedate: "2024-04-22",
          morning: 60,
          lunch: 80,
          dinner: 90,
        },
        {
          timedate: "2024-04-23",
          morning: 70,
          lunch: 90,
          dinner: 100,
        },
        // Add more objects as needed
      ],
    };
  },
  methods: {
    getDate(dateStr) {
      // Create a new Date object
      var date = new Date(dateStr);

      // Get the day, month and year
      var day = date.getDate();
      var month = date.getMonth() + 1; // Months are zero-based in JavaScript
      var year = date.getFullYear();

      // Get the last digit of the year
      var lastDigitOfYear = year % 40;

      // Return the formatted date
      return `${day}|${month}|${lastDigitOfYear}`;
    },
    openContainer() {
      this.showContainer = true;
    },
    closeContainer() {
      this.showContainer = false;
    },
    sendData() {
      this.showButton = false;
      // replace 'your_api_url' with the actual API URL
      fetch("your_api_url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: this.porcion_data }),
      });
    },
    getColor(value) {
      if (value < 50) {
        return "red";
      } else if (value < 70) {
        return "orange";
      } else {
        return "green";
      }
    },
  },
  props: {
    porcion: {
      default: null,
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}

.orange {
  color: orange;
}

.green {
  color: green;
}
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
  overflow: scroll;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}

.table-container table {
  width: 100%;
  text-align: center;
}

.table-container th {
  width: 25%;
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
