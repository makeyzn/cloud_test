import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "./form.module.css";
import button from "../../components/Button/Button.module.css";
import style from "./FormPage.module.css";
import { addInfo } from "../../../features/SendDataSlice";
import CustomizedSteppers from "../../../components/Stepper";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Button from "../../../components/Button/Button";
import schemaStep1, { InfoValues } from "./schemaStep1";

const Step1 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaStep1),
    defaultValues: data,
  });

  function goBack() {
    navigate("/");
  }

  const onSubmit = (data: InfoValues) => {
    dispatch(addInfo(data));
    navigate("/create/step2");
  };

  return (
    <>
      <div className={style.container}>
        <CustomizedSteppers activeStep={0} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={form.container}>
            <p>Nickname</p>
            <input
              type="text"
              placeholder="Placeholder"
              {...register("nickname")}
              className={form.input}
            />
            <p>{errors.nickname?.message}</p>
            <p>Name</p>
            <input
              type="text"
              placeholder="Placeholder"
              {...register("name")}
              className={form.input}
            />
            <p>{errors.name?.message}</p>
            <p>Sername</p>
            <input
              type="text"
              placeholder="Placeholder"
              {...register("surname")}
              className={form.input}
            />
            <p>{errors.surname?.message}</p>
            <p>Sex</p>
            <select {...register("sex")} className={form.input}>
              <option value="" disabled selected hidden>
                Не выбрано
              </option>
              <option value="man" className={form.option}>
                man
              </option>
              <option value="woman" style={{ padding: "12px" }}>
                woman
              </option>
            </select>
            <p>{errors.sex?.message}</p>
          </div>
          <div className={button.container}>
            <Button
              id="button-back"
              className={button.buttonBack}
              onClick={goBack}
            >
              Назад
            </Button>
            <Button
              id="button-next"
              className={button.buttonNext}
              type="submit"
            >
              Далее
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
