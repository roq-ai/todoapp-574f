import * as yup from 'yup';

export const listValidationSchema = yup.object().shape({
  title: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
