# 🛒 Modern Food Store - React E-commerce

<div align="center">

یک فروشگاه محصولات غذایی مدرن ساخته شده با React و Tailwind CSS با قابلیت فیلتر محصولات، سبد خرید، تغییر تم، انیمیشن‌های روان و رابط کاربری مدرن.

</div>

---

## 📌 About The Project

**Modern Food Store** یک پروژه فروشگاهی فرانت‌اند است که با هدف ساخت یک تجربه خرید مدرن و نمایش مهارت‌های توسعه رابط کاربری با React ساخته شده است.

در این پروژه کاربران می‌توانند:

- محصولات غذایی را مشاهده کنند
- محصولات را بر اساس دسته‌بندی فیلتر کنند
- جزئیات محصولات را مشاهده کنند
- محصولات را به سبد خرید اضافه کنند
- تعداد محصولات را مدیریت کنند
- بین حالت روشن و تاریک تغییر وضعیت دهند

تمرکز اصلی پروژه:

- معماری Component-Based در React
- ساخت کامپوننت‌های قابل استفاده مجدد
- مدیریت State
- طراحی Responsive
- ایجاد تجربه کاربری مدرن
- استفاده از Animation در رابط کاربری

بوده است.

---

# ✨ Features

## 🛍️ Product System

- نمایش لیست محصولات
- کارت محصول حرفه‌ای
- نمایش اطلاعات کامل محصول:

  - نام محصول
  - دسته‌بندی
  - تصویر محصول
  - قیمت اصلی
  - قیمت تخفیف خورده
  - درصد تخفیف
  - امتیاز کاربران
  - تعداد نظرات
  - برند
  - وزن محصول
  - موجودی
  - ارسال رایگان
  - ضمانت محصول
  - ویژگی‌ها
  - توضیحات

---

# 🔎 Category Filter System

سیستم فیلتر محصولات:

- فیلتر بر اساس دسته‌بندی
- نمایش همه محصولات
- نمایش پیام در صورت نبود محصول
- Dropdown اختصاصی انتخاب دسته‌بندی
- آیکون اختصاصی برای هر دسته‌بندی

دسته‌بندی‌های موجود:

- غلات
- روغن
- شیرینی
- نوشیدنی
- ادویه
- میوه خشک

---

# 🛒 Shopping Cart

سیستم کامل سبد خرید:

- اضافه کردن محصول به سبد خرید
- حذف محصول از سبد خرید
- افزایش تعداد محصول
- کاهش تعداد محصول
- نمایش تعداد آیتم‌های سبد
- محاسبه مجموع قیمت
- نمایش محصولات انتخاب شده
- مدیریت وضعیت سبد خرید

---

# 🌙 Theme System

سیستم مدیریت تم:

- پشتیبانی از Light Mode
- پشتیبانی از Dark Mode
- Theme Switcher اختصاصی
- تغییر پوسته بدون Reload
- طراحی هماهنگ تمام کامپوننت‌ها با حالت تاریک
- استفاده از Tailwind Dark Variant

---

# 🎨 Modern UI

ویژگی‌های طراحی:

- Glassmorphism Design
- Responsive Design
- طراحی Mobile First
- کارت‌های محصول مدرن
- Hover Effects
- Transition های نرم
- Blur Effects
- Shadow های مدرن
- رابط کاربری سازگار با موبایل و دسکتاپ

---

# 🎞️ Animations

استفاده از:

## Framer Motion

برای:

- انیمیشن Dropdown
- باز و بسته شدن عناصر
- تغییر حالت آیکون‌ها
- نمایش انتخاب‌ها
- Transition های نرم

## Auto Animate

برای:

- تغییر لیست محصولات
- اضافه شدن محصولات
- حذف محصولات
- حرکت نرم کارت‌ها

---

# 🧩 Reusable Components

ساختار پروژه بر اساس کامپوننت‌های مستقل طراحی شده است.

## ProductCard

مسئول:

- نمایش اطلاعات محصول
- نمایش قیمت و تخفیف
- اضافه کردن محصول به سبد خرید
- تعامل کاربر با محصول

---

## ProductList

مسئول:

- نمایش لیست محصولات
- مدیریت کارت‌های محصول
- اتصال Animation به لیست

---

## CategoryIcon

مسئول:

- مدیریت آیکون دسته‌بندی‌ها
- نمایش آیکون مناسب هر محصول
- مدیریت رنگ آیکون‌ها

---

## Select

مسئول:

- Dropdown انتخاب دسته‌بندی
- مدیریت انتخاب گزینه‌ها
- نمایش وضعیت انتخاب شده

---

## Cart Components

مسئول:

- نمایش محصولات انتخاب شده
- تغییر تعداد
- حذف محصول
- محاسبه قیمت نهایی

---

# 🛠️ Technologies

## Frontend

| Technology | Description |
|---|---|
| React 19 | UI Library |
| Vite | Build Tool |
| Tailwind CSS 4 | Styling Framework |
| JavaScript ES6+ | Programming Language |

---

# 📦 Libraries

| Library | Usage |
|---|---|
| @headlessui/react | Accessible UI Components |
| framer-motion | Animations |
| @formkit/auto-animate | Automatic List Animations |
| lucide-react | Icons |
| react-hot-toast | Notifications |

---

# 📂 Project Structure

```
src
│
├── assets
│   └── images
│
├── components
│   │
│   ├── product
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── CategoryIcon.jsx
│   │
│   ├── cart
│   │   ├── Cart.jsx
│   │   └── CartItem.jsx
│   │
│   └── ui
│       └── Select.jsx
│
├── data
│   └── products.js
│
├── hooks
│
├── context
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Installation

ابتدا پروژه را Clone کنید:

```bash
git clone https://github.com/your-username/modern-food-store.git
```

ورود به پوشه پروژه:

```bash
cd modern-food-store
```

نصب پکیج‌ها:

```bash
npm install
```

---

# ▶️ Run Development Server

اجرای پروژه:

```bash
npm run dev
```

پروژه در:

```
http://localhost:5173
```

اجرا می‌شود.

---

# 📦 Production Build

ساخت نسخه نهایی:

```bash
npm run build
```

اجرای نسخه Build:

```bash
npm run preview
```

---

# 📜 Available Scripts

| Command | Description |
|---|---|
| npm run dev | Start development server |
| npm run build | Production build |
| npm run preview | Preview build |
| npm run lint | Run ESLint |

---

# 🧠 Architecture

پروژه با معماری Component-Based ساخته شده است.

مزایا:

- کد تمیزتر
- قابلیت توسعه آسان
- استفاده مجدد از کامپوننت‌ها
- نگهداری ساده‌تر پروژه

---

# 📸 Screenshots

برای نمایش تصاویر پروژه:

```
screenshots
│
├── home.png
├── dark-mode.png
├── cart.png
└── filter.png
```

---

# 🔮 Future Improvements

قابلیت‌های آینده:

- [ ] اتصال به API واقعی
- [ ] سیستم ورود کاربران
- [ ] صفحه جزئیات محصول
- [ ] سیستم پرداخت آنلاین
- [ ] صفحه Checkout
- [ ] مدیریت سفارش‌ها
- [ ] ذخیره اطلاعات کاربر
- [ ] ذخیره سبد خرید در LocalStorage
- [ ] مدیریت State با Zustand یا Redux
- [ ] Pagination
- [ ] پنل مدیریت محصولات

---

# 🎯 Learning Goals

هدف‌های آموزشی پروژه:

- یادگیری React حرفه‌ای
- ساخت کامپوننت‌های Reusable
- مدیریت Props و State
- کار با Hooks
- طراحی UI با Tailwind CSS
- ساخت Dark Mode
- مدیریت Theme
- کار با Animation
- ساخت ساختار مناسب پروژه

---

# 👨‍💻 Author

## Salar Karimi

Frontend Developer

---

# 📄 License

This project is licensed under the MIT License.