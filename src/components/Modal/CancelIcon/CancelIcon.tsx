import cancel from "./circle-xmark-solid.svg";
import icon from "../Modal.module.css";

const CancelIcon = () => {
  return (
    <figure className={`${icon.mainContent} ${icon.red}`}>
      <img src={cancel} alt="accept" />
    </figure>
  );
};

export default CancelIcon;
