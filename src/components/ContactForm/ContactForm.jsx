import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

export default function ContactForm() {

    const nameFieldId = useId();
    const numberField = useId();

    const handleSubmit = (values, actions) => {
        actions.resetForm();
    }


    return (
        <Formik
            initialValues={{
            id: "",
            name: "",
            number: "", 
        }}
            onSubmit={handleSubmit}>
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
                </div>
                <div className={css.form}>
                    <label className={css.label} htmlFor={numberField}>
                        Number
                    </label>
                    <Field
                        className={css.field}
                        type="text"
                        name="number"
                        id={numberField}
                    />
                </div>
                         

                <button className={css.button} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
        
    );
    
}