import riceImg from "../assets/images/برنج.jpg";
import oilImg from "../assets/images/روغن.jpg";
import honeyImg from "../assets/images/عسل.jpg";
import teaImg from "../assets/images/چای.jpg";
import saffronImg from "../assets/images/زعفران.jpg";
import dateImg from "../assets/images/خرمای.jpg";

const products = [
  {
    id: 1,
    name: "برنج هاشمی",
    category: "غلات",

    price: 85000,
    oldPrice: 95000,
    discount: 10,

    rating: 4.9,
    reviews: 312,

    stock: true,
    freeShipping: true,
    warranty: "ضمانت کیفیت",

    brand: "هاشمی",
    weight: "10 کیلوگرم",

    img: riceImg,

    description:
      "برنج هاشمی ایرانی با عطر و طعم فوق‌العاده، دانه‌بلند و مناسب برای مهمانی‌ها و مصرف روزانه. این برنج پس از پخت کاملاً قد کشیده و کیفیت بالایی دارد.",

    features: ["۱۰۰٪ ایرانی", "دانه بلند", "کیفیت ممتاز", "بدون مواد افزودنی"],
  },

  {
    id: 2,
    name: "روغن زیتون",
    category: "روغن",

    price: 120000,
    oldPrice: 138000,
    discount: 13,

    rating: 4.8,
    reviews: 241,

    stock: true,
    freeShipping: true,
    warranty: "تضمین اصالت",

    brand: "اولیو",
    weight: "1 لیتر",

    img: oilImg,

    description:
      "روغن زیتون فرابکر تهیه شده از بهترین زیتون‌های تازه، سرشار از آنتی‌اکسیدان و مناسب برای سالاد، پخت‌وپز و رژیم غذایی سالم.",

    features: ["فرابکر", "سرشار از امگا ۹", "بدون افزودنی", "مناسب رژیم غذایی"],
  },

  {
    id: 3,
    name: "عسل طبیعی",
    category: "شیرینی",

    price: 95000,
    oldPrice: 110000,
    discount: 14,

    rating: 4.7,
    reviews: 178,

    stock: true,
    freeShipping: false,
    warranty: "تضمین کیفیت",

    brand: "شهدستان",
    weight: "900 گرم",

    img: honeyImg,

    description:
      "عسل طبیعی و خالص با طعمی دلنشین، بدون افزودنی و مناسب برای صبحانه، دمنوش و تقویت سیستم ایمنی بدن.",

    features: ["طبیعی", "بدون شکر", "مناسب صبحانه", "سرشار از مواد معدنی"],
  },

  {
    id: 4,
    name: "چای ایرانی",
    category: "نوشیدنی",

    price: 45000,
    oldPrice: 52000,
    discount: 13,

    rating: 4.6,
    reviews: 145,

    stock: true,
    freeShipping: false,
    warranty: "ضمانت تازگی",

    brand: "گلستان",
    weight: "500 گرم",

    img: teaImg,

    description:
      "چای ایرانی خوش‌عطر و خوش‌رنگ، بدون اسانس و مواد افزودنی، مناسب برای یک نوشیدنی اصیل و سالم در کنار خانواده.",

    features: ["بدون اسانس", "خوش‌رنگ", "خوش‌عطر", "برداشت شمال ایران"],
  },

  {
    id: 5,
    name: "زعفران اصل",
    category: "ادویه",

    price: 250000,
    oldPrice: 290000,
    discount: 14,

    rating: 5,
    reviews: 421,

    stock: true,
    freeShipping: true,
    warranty: "ضمانت اصالت",

    brand: "قائنات",
    weight: "5 گرم",

    img: saffronImg,

    description:
      "زعفران درجه یک با رنگ‌دهی و عطر فوق‌العاده، مناسب برای انواع غذاها، دسرها و نوشیدنی‌های سنتی.",

    features: ["سوپر نگین", "رنگ‌دهی عالی", "عطر فوق‌العاده", "برداشت قائنات"],
  },

  {
    id: 6,
    name: "خرمای مضافتی",
    category: "میوه خشک",

    price: 75000,
    oldPrice: 86000,
    discount: 13,

    rating: 4.8,
    reviews: 203,

    stock: true,
    freeShipping: false,
    warranty: "ضمانت تازگی",

    brand: "بم",
    weight: "700 گرم",

    img: dateImg,

    description:
      "خرمای مضافتی تازه، شیرین و نرم، سرشار از انرژی و مواد معدنی، مناسب برای میان‌وعده و ماه رمضان.",

    features: ["تازه", "بدون مواد نگهدارنده", "شیرین و نرم", "سرشار از انرژی"],
  },
];

export default products;
