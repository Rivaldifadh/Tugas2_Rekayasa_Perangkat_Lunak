<template>
  <!--Merupakan Komponen utama dari ionic framework -->
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Cuaca Jakarta</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Tempat isi utama dari website dan ion padding berguna dalam memberikan jarak secara otomatis agar tampilan lebih rapi -->
    <ion-content class="ion-padding">
      <div v-if="loading" class="loading">
        <ion-spinner name="crescent"></ion-spinner>
      </div>

      <!-- v if artinya tampilkan jika elemen berisi benar -->
      <div v-if="!loading">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Grafik Suhu</ion-card-title>
          </ion-card-header>

          <!-- canvas digunakan oleh Chart.js untuk menggambarkan grafiknya -->
          <ion-card-content>
            <canvas id="weatherChart"></canvas>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Data Cuaca</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <table class="weather-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Waktu</th>
                  <th>Suhu (°C)</th>
                </tr>
              </thead>

              <!-- v for digunakan untuk mengulang data -->
              <!-- dan untuk item.time juga item.teperature untuk menampilkan data -->
              <!-- untuk tanda {{  }} digunakan dalam menampilkan data JavaScript ke HTML -->
              <tbody>
                <tr v-for="(item, index) in weatherData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.time }}</td>
                  <td>{{ item.temperature }}</td>
                </tr>
              </tbody>
            </table>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<!-- axios digunakan untuk mengambil data dari API-->
<!-- dan untuk Chart.js digunakan untuk membuat grafik secara otomatis -->
<script>
import axios from "axios";
import Chart from "chart.js/auto";

// ionic komponen ini digunakan agar dapat dipakai di template website
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
} from "@ionic/vue";

// ini merupakan objek utama dari komponen Vue
export default {
  // components digunakan untuk mendaftarkan komponen ionic agar dapat diaplikasikan
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner,
  },

  // data merupakan tempat menyimpan data API
  data() {
    return {
      weatherData: [],
      loading: true,
    };
  },

  methods: {
    // fetch merupakan function untuk mengambil data cuaca
    async fetchWeather() {
      try {
        // axios get berfungsi dalam mengambil data dari API
        // await maksudnya tunggu proses selesai dulu
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m",
        );

        // mengambil data dari API yang berupa data waktu
        const times = response.data.hourly.time
          .slice(0, 10)
          .map((time) => time.substring(11, 16));

        const temperatures = response.data.hourly.temperature_2m.slice(0, 10);

        // proses mapping data yang mana prosesnya menggabungkan antara waktu dan suhu
        this.weatherData = times.map((time, index) => ({
          time,
          temperature: temperatures[index],
        }));

        // berfungsi dalam menghilangkan spinner loading
        this.loading = false;

        // ini berarti bahwa tunggu HTML selesai dirender dulu
        this.$nextTick(() => {
          this.createChart(times, temperatures);
        });
      } catch (error) {
        console.error(error);
      }
    },

    createChart(times, temperatures) {
      const canvas = document.getElementById("weatherChart");

      if (!canvas) {
        console.log("Canvas tidak ditemukan");
        return;
      }

      new Chart(canvas, {
        type: "line",

        data: {
          labels: times,

          // isi data grafik
          datasets: [
            {
              label: "Suhu °C",
              data: temperatures,
              borderWidth: 2,

              // tension ini dibuat agar garis pada grafik lebih halus atau melengkung
              tension: 0.3,
            },
          ],
        },

        // responsive memicu grafik otomatis menyesuaikan ukuran layar
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  },

  // ini artinya jalankan function saat halaman selesai dibuka
  mounted() {
    this.fetchWeather();
  },
};
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.weather-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.weather-table th,
.weather-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.weather-table th {
  background-color: #3880ff;
  color: white;
}

.weather-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

canvas {
  width: 100% !important;
  height: 400px !important;
}
</style>
