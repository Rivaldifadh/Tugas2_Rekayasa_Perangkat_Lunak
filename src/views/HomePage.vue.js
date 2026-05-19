/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import axios from "axios";
import Chart from "chart.js/auto";
// ionic komponen ini digunakan agar dapat dipakai di template website
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, } from "@ionic/vue";
// ini merupakan objek utama dari komponen Vue
export default (await import('vue')).defineComponent({
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
                const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m");
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
            }
            catch (error) {
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
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
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
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.IonPage;
/** @type {[typeof __VLS_components.IonPage, typeof __VLS_components.ionPage, typeof __VLS_components.IonPage, typeof __VLS_components.ionPage, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.IonHeader;
/** @type {[typeof __VLS_components.IonHeader, typeof __VLS_components.ionHeader, typeof __VLS_components.IonHeader, typeof __VLS_components.ionHeader, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
const __VLS_8 = {}.IonToolbar;
/** @type {[typeof __VLS_components.IonToolbar, typeof __VLS_components.ionToolbar, typeof __VLS_components.IonToolbar, typeof __VLS_components.ionToolbar, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    color: "primary",
}));
const __VLS_10 = __VLS_9({
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.IonTitle;
/** @type {[typeof __VLS_components.IonTitle, typeof __VLS_components.ionTitle, typeof __VLS_components.IonTitle, typeof __VLS_components.ionTitle, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
var __VLS_11;
var __VLS_7;
const __VLS_16 = {}.IonContent;
/** @type {[typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "ion-padding" },
}));
const __VLS_18 = __VLS_17({
    ...{ class: "ion-padding" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading" },
    });
    const __VLS_20 = {}.IonSpinner;
    /** @type {[typeof __VLS_components.IonSpinner, typeof __VLS_components.ionSpinner, typeof __VLS_components.IonSpinner, typeof __VLS_components.ionSpinner, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        name: "crescent",
    }));
    const __VLS_22 = __VLS_21({
        name: "crescent",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
}
if (!__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_24 = {}.IonCard;
    /** @type {[typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_27.slots.default;
    const __VLS_28 = {}.IonCardHeader;
    /** @type {[typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
    const __VLS_30 = __VLS_29({}, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_31.slots.default;
    const __VLS_32 = {}.IonCardTitle;
    /** @type {[typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_35.slots.default;
    var __VLS_35;
    var __VLS_31;
    const __VLS_36 = {}.IonCardContent;
    /** @type {[typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, ]} */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_39.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
        id: "weatherChart",
    });
    var __VLS_39;
    var __VLS_27;
    const __VLS_40 = {}.IonCard;
    /** @type {[typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, ]} */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
    const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_43.slots.default;
    const __VLS_44 = {}.IonCardHeader;
    /** @type {[typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, ]} */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
    const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_47.slots.default;
    const __VLS_48 = {}.IonCardTitle;
    /** @type {[typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_51.slots.default;
    var __VLS_51;
    var __VLS_47;
    const __VLS_52 = {}.IonCardContent;
    /** @type {[typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, ]} */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
    const __VLS_54 = __VLS_53({}, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_55.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: "weather-table" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.weatherData))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: (index),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (index + 1);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.time);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.temperature);
    }
    var __VLS_55;
    var __VLS_43;
}
var __VLS_19;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['ion-padding']} */ ;
/** @type {__VLS_StyleScopedClasses['loading']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-table']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=HomePage.vue.js.map