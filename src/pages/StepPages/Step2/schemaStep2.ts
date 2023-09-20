import * as yup from "yup";

const schemaStep2 = yup.object().shape({
  advntgs: yup
    .array(
      yup.object().shape({
        advntg: yup.string().required("Введите данные в форму"),
      })
    )
    .required(),
  checkboxes: yup
    .array()
    .of(yup.number())
    .min(1)
    .required("Выберите один элемент"),
  radio: yup.number().required("Выберите один элемент"),
});

export type FormValues = yup.InferType<typeof schemaStep2>;

export default schemaStep2;
