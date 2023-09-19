import "../../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./mainPage.module.css";
import button from "../../components/Button/Button.module.css";
import { addMain } from "../../features/SendDataSlice";
import MainInfo from "../../components/MainInfo/MainInfo";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export type MainValues = {
  phone: string;
  email: string;
};

const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);

  const schema = yup.object().shape({
    phone: yup.string().required(),
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const onSubmit = (data: MainValues) => {
    console.log(data);
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
