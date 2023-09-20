import * as yup from "yup";

const schemaStep1 = yup.object().shape({
  nickname: yup
    .string()
    .max(30)
    .matches(/^[a-zA-Z0-9]+$/, "Only letters and numbers are allowed")
    .required(),
  name: yup
    .string()
    .max(50)
    .matches(/^[a-zA-Z]+$/, "Only alphabetic characters are allowed")
    .required(),
  surname: yup
    .string()
    .max(50)
    .matches(/^[a-zA-Z]+$/, "Only alphabetic characters are allowed")
    .required(),
  sex: yup.string().oneOf(["man", "woman"]).required(),
});

export type InfoValues = yup.InferType<typeof schemaStep1>;

export default schemaStep1;
