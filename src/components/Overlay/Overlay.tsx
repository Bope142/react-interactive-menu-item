import "./style.css";

interface OverlayProps {
  isVisible: boolean;
  content: JSX.Element;
}
function Overlay({ isVisible, content }: OverlayProps) {
  return (
    <div className={`box-overlay ${isVisible ? "overlay-open" : ""}`}>
      {content}
    </div>
  );
}

export default Overlay;
