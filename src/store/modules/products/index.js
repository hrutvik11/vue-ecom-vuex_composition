export const products = {
  state() {
    return {
      categories: [
        {
          title: "image & sound",
          id: 1,
        },
        {
          title: "Computers & Tablets",
          id: 2,
        },
        {
          title: "Household & Living",
          id: 3,
        },
        {
          title: "kitchen",
          id: 4,
        },
        {
          title: "Sports & Care",
          id: 5,
        },
        {
          title: "All categories",
          id: "all",
        },
      ],
      subCategories: [
        {
          id: 1,
          name: "Television",
          categoryID: 1,
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/televisies.png",
          products: [
            {
              id: 1,
              isTrending: true,
              name: "Samsung QE55QN92BATXXN",
              desc: "Screen diagonal: 55 inches (140 cm) | Screen type: QLED | Image refresh: 100 Hz",
              price: "1099",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/s/a/samsung-55_-oled-4k-qe55s92c-2023.jpg",
              specification: {
                Brand: "Samsung",
                "Introduction year": 2023,
                Guarantee: "2 years",
                "Screen diagonal": "55 inches (140cm)",
                Sharpness: "Ultra HD (4k)",
                "Screen type": "OLED",
                "Local Dimming": "Yes",
                "Image refresh": "120 Hz",
                Ambilight: "No",
                "3D": "No",
              },
              stock: 15,
              saleDiscount: 10,
            },
          ],
        },
        {
          id: 2,
          name: "Home cinema",
          categoryID: 1,
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/homecinema.jpg",
          products: [
            {
              id: 2,
              name: "Samsung Q-series Soundbar HW-Q800C",
              desc: "Operating system: Android | Streaming services: Netflix, Spotify, Videoland, Youtube | Control via app: Yes",
              price: "849",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/s/a/samsung-q-series-soundbar-hw-q800c-2023.jpg",
              stock: 5,
              saleDiscount: 13,
            },
            {
              id: 3,
              name: "Denon DHT-S416",
              desc: "Bluetooth: Yes | Wi-Fi: Yes | HDMI connection: Yes",
              isTrending: true,
              price: "239",
              stock: 5,
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/1/4/1491000_1_1.jpg",
              saleDiscount: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Speakers",
          categoryID: 1,
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/speakers.jpg",
          products: [
            {
              id: 4,
              name: "Denon Home 150 Black",
              desc: "Water Resistant: Yes | Bluetooth: Yes | Wi-Fi: Yes | Smartphone App: Yes",
              price: "199",
              stock: 7,
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/d/e/denon-home-150-multi-room-speaker.jpg",
              saleDiscount: 9,
            },
          ],
        },
        {
          id: 5,
          name: "Laptops",
          categoryID: 2,
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/laptop.jpg",
          products: [
            {
              id: 5,
              isTrending: true,
              name: "Lenovo IdeaPad 3 15ALC6 - 82KU01VUMH",
              desc: "Screen diagonal: 15.6 inches | Processor: AMD Ryzen 3 | Working memory: 8 GB | Battery life: up to 9 hours",
              price: "498",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/l/e/lenovo-ideapad-3-15alc6-82ku01vumh.jpg",
              stock: 9,
              saleDiscount: 20,
            },
          ],
        },
        {
          id: 6,
          name: "Tablets",
          categoryID: 2,
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/tablets.jpg",
          products: [
            {
              id: 6,
              name: "Samsung Galaxy Tab A8 WiFi 32GB Rose Gold",
              isTrending: true,
              desc: "Screen diagonal: 10.5 inches | Total storage capacity: 32 GB | Wireless connection: Bluetooth, Wi-Fi",
              price: "219",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/2/0/2004840844.png",
              stock: 2,
              saleDiscount: 30,
            },
          ],
        },
        {
          id: 7,
          name: "Desktps",
          categoryID: 2,
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/desktop.jpg",
          products: [
            {
              id: 7,
              name: "Lenovo legion y740",
              desc: "Screen diagonal: 10.5 inches | Total storage capacity: 32 GB | Wireless connection: Bluetooth, Wi-Fi",
              price: "2119",
              img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/desktop.jpg",
              stock: 4,
              saleDiscount: 50,
            },
          ],
        },
        {
          id: 8,
          name: "Washing machine",
          categoryID: 3,
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/wasmachines.jpg",
          products: [
            {
              id: 8,
              name: "Samsung WW90T936ASH/S2",
              isTrending: true,
              desc: "Vulgewicht: 9 kg | Toerental: 1600 tpm | Energieklasse: A",
              price: "899",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/p/i/pi_637371033895167620_zoom_1__1.jpg",
              stock: 5,
              saleDiscount: 60,
            },
          ],
        },
        {
          id: 9,
          name: "Cloths Dryer",
          categoryID: 3,
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/wasdroger.jpg",
          products: [
            {
              id: 9,
              name: "Beko DA8012GA",
              desc: "Type: Exhaust Dryer | Energy class: C | Maximum dry weight: 8 kg",
              price: "360",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/7/1/7185901330_lo1_20190917_201731_3.png",
              stock: 33,
              saleDiscount: 10,
            },
          ],
        },

        {
          id: 10,
          name: "Dishwasher",
          categoryID: 4,
          img: "https://eptummers.nl/media/wysiwyg/category/keuken/vaatwassers.jpg",
          products: [
            {
              id: 10,
              name: "Miele G 5022 SCU CLST",
              desc: "Niche height: 85 - 91 cm | Niche depth: 57 cm | Number of place settings: 14 | Energy class: E",
              price: "998",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/1/4/1472051_1.jpg",
              stock: 22,
              saleDiscount: 20,
            },
          ],
        },
        {
          id: 11,
          name: "Coffee",
          categoryID: 4,
          img: "https://eptummers.nl/media/wysiwyg/category/keuken/JuraZ10.jpg",
          products: [
            {
              id: 11,
              name: "Siemens TE657F03DE",
              isTrending: true,
              desc: "Inhoud waterreservoir: 1,7 liter | Heetwaterfunctie: Ja | Geschikt voor melkspecialiteiten: Ja",
              price: "938",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/5/8/588579-n1.jpg",
              stock: 13,
              saleDiscount: 15,
            },
          ],
        },

        {
          id: 12,
          name: "Shave",
          categoryID: 5,
          img: "https://eptummers.nl/media/wysiwyg/category/sport-verzorging/scheren.jpg",
          products: [
            {
              id: 12,
              name: "Phillips S1333/41",
              desc: "Beard growth: Light beard growth | Precision Trimmer: Yes | Battery life: 45 minutes",
              price: "54",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/s/1/s1333_41_rtp_global_001_3_1.jpg",
              stock: 11,
              saleDiscount: 33,
            },
          ],
        },
        {
          id: 13,
          name: "Oral care",
          categoryID: 5,
          img: "https://eptummers.nl/media/wysiwyg/category/sport-verzorging/mondverzorging.jpg",
          products: [
            {
              id: 13,
              name: "Boombrush Brush Head Black (4 pieces)",
              desc: "Charging time: 16 hours | Battery life: 56 min",
              price: "24",
              img: "https://eptummers.nl/media/catalog/product/cache/7732820e3ffd8f70404990cac52a8505/1/6/1651434.webp",
              stock: 10,
              saleDiscount: 66,
            },
          ],
        },
      ],
      isSaleLive: false,
      topProducts: {},
    };
  },

  getters: {
    getCategories(state) {
      return state.categories;
    },

    getSubCategories(state) {
      return state.subCategories;
    },

    getSubCategory: (state) => (catID) => {
      const filterData = [...state.subCategories].filter(
        (el) => el.categoryID.toString().trim() === catID.toString().trim()
      );
      return filterData;
    },

    getIsSaleLive(state) {
      return state.isSaleLive;
    },

    getTopProductsCount: (state) => (pid) => {
      if (pid) {
        return state.topProducts[pid];
      } else {
        return state.topProducts;
      }
    },
  },
  mutations: {
    SET_TOP_PRODUCTS(state, { pid, count }) {
      state.topProducts = { ...state.topProducts, [pid]: count };
    },
    SET_SUB_CATEGORIES(state, data) {
      state.subCategories = data;
    },
    SET_SALE(state, bool) {
      state.isSaleLive = bool;
    },
  },
  actions: {
    addTopProducts({ commit, getters }, { pid, count }) {
      commit("SET_TOP_PRODUCTS", { pid, count });
    },
  },
};
