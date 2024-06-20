import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to Clipboard");
      } catch (error) {
        toast.error("Failed to copy to Clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="color-value">{weight}%</p>
      <p className="percent-value"># {hex}</p>
    </article>
  );
};

export default SingleColor;
