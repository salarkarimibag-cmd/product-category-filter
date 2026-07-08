
import { Wheat, Droplets, Candy, Coffee, Sparkles, Apple, LayoutGrid } from "lucide-react";

const iconMap = {
  غلات: Wheat,
  روغن: Droplets,
  شیرینی: Candy,
  نوشیدنی: Coffee,
  ادویه: Sparkles,
  "میوه خشک": Apple,
};

function CategoryIcon({ category, size = 18 }) {
  const Icon = iconMap[category] || LayoutGrid;
  return <Icon size={size} className="text-rose-500 shrink-0" />;
}

export default CategoryIcon;