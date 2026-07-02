import riceImg from "../assets/images/برنج.jpg";
import oilImg from "../assets/images/روغن.jpg";
import honeyImg from "../assets/images/عسل.jpg";
import teaImg from "../assets/images/چای.jpg";
import saffronImg from "../assets/images/زعفران.jpg";
import dateImg from "../assets/images/خرمای .jpg";

const products = [
  { id: 1, name: "برنج هاشمی", category: "غلات", price: 85000, img: riceImg },
  { id: 2, name: "روغن زیتون", category: "روغن", price: 120000, img: oilImg },
  { id: 3, name: "عسل طبیعی", category: "شیرینی", price: 95000, img: honeyImg },
  { id: 4, name: "چای ایرانی", category: "نوشیدنی", price: 45000, img: teaImg },
  { id: 5, name: "زعفران اصل", category: "ادویه", price: 250000, img: saffronImg },
  { id: 6, name: "خرمای مضافتی", category: "میوه خشک", price: 75000, img: dateImg },
];

export default products;