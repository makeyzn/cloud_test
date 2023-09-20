import * as yup from "yup";

const schemaMain = yup.object().shape({
  phone: yup.string().required(),
  email: yup.string().email().required(),
});

export type MainValues = yup.InferType<typeof schemaMain>;

export default schemaMain;
