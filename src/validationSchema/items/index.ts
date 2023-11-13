import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  description: yup.string().required(),
  status: yup.boolean().required(),
  list_id: yup.string().nullable().required(),
});
