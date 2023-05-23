import * as Yup from 'yup';

const schemaAddRecipe = Yup.object({
  file: Yup.mixed()
  .required('Photo is required')
  .test("FILE_SIZE", "Uploaded file is too big.", value => value && value.size <= 1024*1024)
        .test("FILE_FORMAT", "Uploaded file has unsupported format.", value => value && ["image/png","image/jpeg"].includes(value.type)),
  title: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  preparationTime: Yup.string().required('Preparation time is required'),
});

export default schemaAddRecipe;
