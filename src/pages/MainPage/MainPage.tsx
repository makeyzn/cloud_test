import "../../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./mainPage.module.css";
import button from "../../components/Button/Button.module.css";
import { addMain } from "../../features/SendDataSlice";
import MainInfo from "../../components/MainInfo/MainInfo";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import schemaMain, { MainValues } from "./schemaMain";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaMain),
    defaultValues: data,
  });

  const onSubmit = (data: MainValues) => {
    dispatch(addMain(data));
    navigate("/create/step1");
  };

  return (
    <>
      <div className={style.container}>
        <MainInfo />
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.form__container}>
            <p>Номер телефона</p>
            <InputMask
              mask="+7 (999) 999-99-99"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              {...register("phone")}
              className={style.form__input}
            />
            <p>{errors.phone?.message}</p>
            <p>Email</p>
            <input
              type="text"
              placeholder="konakovv66@yandex.ru"
              {...register("email")}
              className={style.form__input}
            />
            <p>{errors.email?.message}</p>
          </div>
          <Button id="button-start" className={button.buttonNext} type="submit">
            Начать
          </Button>
        </form>
      </div>
    </>
  );
};

export default MainPage;
