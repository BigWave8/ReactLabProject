import * as Yup from "yup";

export const OrderSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(
      /^((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))$/g,
      "Invalid phone number"
    )
    .required("Required"),
  address: Yup.string()
    .min(4, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  year: Yup.number()
    .required("Required")
    .min(15, "You must be at least 15 years")
    .max(99, "You must be at most 99 years"),
});
