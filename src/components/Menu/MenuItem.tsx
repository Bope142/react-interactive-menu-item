import "./style.css";
import { GoArrowRight } from "react-icons/go";

interface PropsMenuItem {
  posIndex: string;
  title: string;
  changeIndex: () => void;
}
function MenuItem({ posIndex, title, changeIndex }: PropsMenuItem) {
  return (
    <div
      className="menu__item"
      onMouseEnter={() => {
        changeIndex();
      }}
    >
      <p className="item__index">{posIndex}</p>
      <p className="item__title">{title}</p>
      <div className="item__icons">
        <p className="txt">VIEW MORE</p>
        <GoArrowRight size={30} />
      </div>
    </div>
  );
}

export default MenuItem;
