import Modal from "./ModalConstructor";
import modal from "./Modal.module.css";
import AcceptIcon from "./AcceptIcon/AcceptIcon";
import CancelIcon from "./CancelIcon/CancelIcon";
import button from "../Button/Button.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router";
import { closeModal } from "../../features/SendDataSlice";
import { Button } from "../Button/Button";

const ModalWindow = () => {
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  function goMain() {
    navigate("/");
  }

  function closeModalClickHandler() {
    dispatch(closeModal());
  }
  return (
    <div>
      {status === "fulfilled" && (
        <Modal
          renderHeader={() => <p>Форма успешно отправлена</p>}
          renderMainContent={() => AcceptIcon()}
          renderFooter={() => (
            <Button className={button.buttonNext} onClick={goMain}>
              На главную
            </Button>
          )}
        />
      )}
      {status === "rejected" && (
        <Modal
          renderHeader={() => (
            <div className={modal.headerContainer}>
              <p>Ошибка</p>
              <Button
                onClick={closeModalClickHandler}
                className={modal.close}
              ></Button>
            </div>
          )}
          renderMainContent={() => CancelIcon()}
          renderFooter={() => (
            <Button
              onClick={closeModalClickHandler}
              className={button.buttonNext}
            >
              Закрыть
            </Button>
          )}
        />
      )}
    </div>
  );
};

export default ModalWindow;
