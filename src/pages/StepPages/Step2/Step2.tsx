import { useNavigate } from "react-router";
import { addData } from "../../../features/SendDataSlice";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import form from "../Form.module.css";
import style from "../FormPage.module.css";
import button from "../../../components/Button/Button.module.css";
import CustomizedSteppers from "../../../components/Stepper";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Button from "../../../components/Button/Button";
import schemaStep2, { FormValues } from "./schemaStep2";

const Step2 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schemaStep2),
    defaultValues: data,
  });

  const {
    fields: advntgsFields,
    append: advntgsAppend,
    remove: advntgsRemove,
  } = useFieldArray({
    name: "advntgs",
    control,
  });

  const onSubmit = (data: FormValues) => {
    dispatch(addData(data));
    navigate("/create/step3");
  };

  const goBack = () => {
    navigate("/create/step1");
  };

  return (
    <div className={style.container}>
      <CustomizedSteppers activeStep={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={form.inputAdv}>
          <p>Advantages</p>
          <div>
            {advntgsFields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className={form.input}
                    {...register(`advntgs.${index}.advntg` as const)}
                    value={form.value}
                  />
                  <Button
                    className={button.delete}
                    type="button"
                    onClick={() => advntgsRemove(index)}
                  ></Button>
                </div>
              );
            })}
          </div>
          <p>{errors.advntgs?.message}</p>
          <Button
            className={button.buttonBack}
            type="button"
            onClick={() => advntgsAppend({ advntg: "" })}
          >
            +
          </Button>
        </div>
        <div className={form.checkbox}>
          <p>Checkbox group</p>
          <div>
            <input
              type="checkbox"
              value={1}
              id="field-checkbox-group-option-1"
              placeholder="Placeholder"
              {...register("checkboxes")}
            />
            <label>1</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="field-checkbox-group-option-2"
              value={2}
              placeholder="Placeholder"
              {...register("checkboxes")}
            />
            <label>2</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="field-checkbox-group-option-3"
              value={3}
              placeholder="Placeholder"
              {...register("checkboxes")}
            />
            <label>3</label>
          </div>
          <p>{errors.checkboxes?.message}</p>
        </div>
        <div className={form.checkbox}>
          <p>Radio group</p>
          <div>
            <input
              type="radio"
              id="field-radio-group-option-1"
              value={1}
              placeholder="Placeholder"
              {...register("radio")}
            />
            <label>1</label>
          </div>
          <div>
            <input
              type="radio"
              id="field-radio-group-option-2"
              value={2}
              placeholder="Placeholder"
              {...register("radio")}
            />
            <label>2</label>
          </div>
          <div>
            <input
              type="radio"
              id="field-radio-group-option-3"
              value={3}
              placeholder="Placeholder"
              {...register("radio")}
            />
            <label>3</label>
          </div>
          <p>{errors.radio?.message}</p>
        </div>
        <div className={button.container}>
          <Button
            id="button-back"
            className={button.buttonBack}
            type="submit"
            onClick={goBack}
          >
            Назад
          </Button>
          <Button id="button-next" className={button.buttonNext} type="submit">
            Далее
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
