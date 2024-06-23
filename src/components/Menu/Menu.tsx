import { MenuItemData } from "../../types/type";
import MenuItem from "./MenuItem";

interface MenuProps {
  item: MenuItemData[];
  onItemSelect: (index: number) => void;
}
function Menu({ item, onItemSelect }: MenuProps) {
  return (
    <div className="containt__list">
      {item.map((item, index) => (
        <MenuItem
          key={index}
          posIndex={item.number}
          title={item.title}
          changeIndex={() => onItemSelect(index)}
        />
      ))}
    </div>
  );
}

export default Menu;
