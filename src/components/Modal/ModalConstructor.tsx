import ReactDOM from "react-dom";
import modal from "./Modal.module.css";
import { useAppSelector } from "../../hooks/hooks";

interface ModalProps {
  renderHeader?: () => JSX.Element;
  renderFooter?: () => JSX.Element;
  renderMainContent?: () => JSX.Element;
}

const root = document.createElement("div");

root.classList.add("portal");
root.id = "portal";
document.body.append(root);

const Modal = ({
  renderHeader,
  renderFooter,
  renderMainContent,
}: ModalProps) => {
  const isOpen = useAppSelector((state) => state.data.isOpen);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={modal.overlay}></div>
      <div className={modal.container}>
        <header className={modal.header}>{renderHeader?.()}</header>
        <main>{renderMainContent?.()}</main>
        <footer className={modal.footer}>{renderFooter?.()}</footer>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
