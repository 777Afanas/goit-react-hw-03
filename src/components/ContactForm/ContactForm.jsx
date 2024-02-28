import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Shart!")
    .max(50, "Too Long!")
    .required("Reuired"),
  number: Yup.string()
    .min(3, "Too Shart!")
    .max(50, "Too Long!")
    .required("Reuired"),
});

const initialValues = {
  id: "",
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (value, actions) => {
    onAdd({
      id: nanoid(),      
      ...value,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" as="span" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" as="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
