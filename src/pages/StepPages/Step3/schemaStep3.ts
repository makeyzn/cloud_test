import * as yup from "yup";

const schemaStep3 = yup.object().shape({
  about: yup
    .string()
    .max(200)
    .matches(/^[a-zA-Z0-9]+$/, "Only letters and numbers are allowed")
    .required(),
});

export type AboutValues = yup.InferType<typeof schemaStep3>;

export default schemaStep3;
