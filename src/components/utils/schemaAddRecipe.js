import * as Yup from 'yup';

const schemaAddRecipe = Yup.object({
  photo: Yup.mixed().required('Photo is required'),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  preparationTime: Yup.number().required('Preparation time is required'),
});

export default schemaAddRecipe;
