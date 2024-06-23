import { useState } from "react";
import "./assets/styles/main.css";
import Menu from "./components/Menu/Menu";
import Overlay from "./components/Overlay/Overlay";
import { menuItems, profile } from "./data";
function App() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);

  const handleItemSelect = (index: number) => {
    setCurrentProfileIndex(index);
  };
  const overlayContent =
    currentProfileIndex === 4 ? (
      <video src={profile[currentProfileIndex]} autoPlay muted loop></video>
    ) : (
      <img src={profile[currentProfileIndex]} alt="" />
    );
  return (
    <div className="container__app">
      <h1>Our Services</h1>
      <div
        className="containt__list"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        <Menu item={menuItems} onItemSelect={handleItemSelect} />
      </div>
      <Overlay isVisible={isFocused} content={overlayContent} />
    </div>
  );
}

export default App;
