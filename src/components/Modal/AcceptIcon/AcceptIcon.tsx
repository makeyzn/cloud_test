import accept from "./circle-check-solid.svg";
import icon from "./Modal.module.css";

const AcceptIcon = () => {
  return (
    <figure className={`${icon.mainContent} ${icon.green}`}>
      <img src={accept} alt="accept" />
    </figure>
  );
};

export default AcceptIcon;
