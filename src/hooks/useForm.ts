import { useState, useEffect } from 'react';
import { formFieldsInterface } from '../types/interface';
import { VALIDATIONS_KEYS, FIELD_LABELS } from '../constants/constants';

const { CHECK_EMPTY, IS_EMAIL, IS_PASSWORD, IS_PHONE, IS_NUMBER, IS_IMAGE, MATCH_PASSOWRD } = VALIDATIONS_KEYS;
const validate = (values: any, validationSchema: any) => {
  const errors: formFieldsInterface = {};
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const imgRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|svg))/;
  const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$');

  for (const field in values) {
    if (validationSchema?.[field]) {
      const validate = validationSchema?.[field];
      if (validate?.[CHECK_EMPTY] && values?.[field].trim() === '')
        errors[field] = `${FIELD_LABELS?.[field]} is required`;
      if (validate?.[IS_EMAIL] && !emailRegex.test(values?.[field])) errors[field] = `Please add a valid email`;
      if (validate?.[IS_PHONE] && !phoneRegex.test(values?.[field])) errors[field] = `Please add a valid Phone number`;
      if (validate?.[IS_IMAGE] && !imgRegex.test(values?.[field])) errors[field] = `Image URL is invalid`;
      if (validate?.[IS_PASSWORD] && !pattern.test(values?.[field]))
        errors[field] = `Passowrd should contain one uppercase, lowercase, number & symbol in it`;
      if (validate?.[IS_NUMBER] && isNaN(values?.[field])) {
        console.log(typeof values?.[field]);
        errors[field] = `Please add a valid ${FIELD_LABELS?.[field]}`;
      }
      if (validate?.[MATCH_PASSOWRD] && values?.[field] !== values?.newPassowrd)
        errors[field] = `Password does not match`;
    }
  }
  return errors;
};

const useForm = (callback: any, formFields: any, validationSchema: any = {}) => {
  const [values, setValues] = useState<any>(formFields);

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, checked, type } = e.target;
    setValues({
      ...values,
      [name]: type === 'radio' ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors({});
    setErrors(validate(values, validationSchema));
    setIsSubmitting(true);
  };

  const handleClearFields = (values: any) => setValues(values);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [errors]);

  return { handleChange, handleSubmit, handleClearFields, values, errors };
};

export default useForm;