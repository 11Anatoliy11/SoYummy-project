// import { RecipeDescriptionFields } from './RecipeDescriptionFields';
import recipes from 'data/recipes.json';
import schemaAddRecipe from 'components/utils/schemaAddRecipe';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import addPhoto from "images/upload-recipe.png"
import { FollowUs } from '../Footer/FollowUs'

const preparationTimes = Array.from(
  { length: 25 },
  (_, index) => (index + 1) * 5
);

export const AddRecipeForm = ({ addRecipe, redirectToMyRecipes }) => {
  const categoryList = new Set(recipes.map(recipe => recipe.category).sort());

  const initialValues = {
    photo: '',
    name: '',
    description: '',
    category: '',
    preparationTime: '',
    ingredients: [],
    preparationSteps: [],
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    // Simulate API request to create a new recipe
    setTimeout(() => {
      addRecipe(values); // Assuming addRecipe is a function to handle the recipe creation
      setSubmitting(false);
      redirectToMyRecipes(); // Assuming redirectToMyRecipes is a function to redirect to MyRecipesPage
    }, 1000);
  };

  const handleFileChange = (event, setFieldValue) => {
    setFieldValue('photo', event.currentTarget.files[0]);
  };

  const handleAddIngredient = (values, setFieldValue) => {
    const ingredients = [...values.ingredients, { name: '', measure: '' }];
    setFieldValue('ingredients', ingredients);
  };

  const handleRemoveIngredient = (index, values, setFieldValue) => {
    const ingredients = [...values.ingredients];
    ingredients.splice(index, 1);
    setFieldValue('ingredients', ingredients);
  };

  //   const handleIngredientChange = (
  //     index,
  //     field,
  //     value,
  //     values,
  //     setFieldValue
  //   ) => {
  //     const ingredients = [...values.ingredients];
  //     ingredients[index][field] = value;
  //     setFieldValue('ingredients', ingredients);
  //   };

  const handlePreparationChange = (event, values, setFieldValue) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const preparationSteps = [...values.preparationSteps, event.target.value];
      setFieldValue('preparationSteps', preparationSteps);
      event.target.value = '';
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaAddRecipe}
      onSubmit={handleFormSubmit}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="photo"><img src={addPhoto} alt="add recipe" /></label>
            <Field
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={event => handleFileChange(event, setFieldValue)}
              style={{ display: "none" }}
            />
            <ErrorMessage
              name="photo"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="name"></label>
            <Field type="text" id="name" name="name" placeholder="Enter item title" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="description"></label>
            <Field as="textarea" id="description" name="description" placeholder="Enter about recipe" />
            <ErrorMessage
              name="description"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <Field as="select" id="category" name="category">
              <option value="">Select a category</option>
              {[...categoryList].map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="preparationTime">Cooking time</label>
            <Field as="select" id="preparationTime" name="preparationTime">
              <option value="">Select preparation time</option>
              {preparationTimes.map(time => (
                <option key={time} value={time}>
                  {time} min
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="preparationTime"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <h3>Ingredients:</h3>
            <button
              type="button"
              onClick={() => handleAddIngredient(values, setFieldValue)}
            >
              Add Ingredient
            </button>
            {values.ingredients.map((ingredient, index) => (
              <div key={index}>
                <Field
                  type="text"
                  name={`ingredients[${index}].name`}
                  placeholder="Ingredient Name"
                />
                <Field as="select" name={`ingredients[${index}].measure`}>
                  <option value="">Select measure</option>
                  <option value="grams">tbs</option>
                  <option value="milliliters">tsp</option>
                  <option value="pieces">kg</option>
                  <option value="pieces"></option>
                </Field>
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveIngredient(index, values, setFieldValue)
                  }
                >
                  Remove Ingredient
                </button>
              </div>
            ))}
          </div>

          <div>
            <h3>Preparation Steps:</h3>
            <Field
              as="textarea"
              name="preparationSteps"
              onKeyDown={event =>
                handlePreparationChange(event, values, setFieldValue)
              }
            />
            {values.preparationSteps.map((step, index) => (
              <div key={index}>{step}</div>
            ))}
          </div>

          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
          <div>
            <h2>
              Follow Us
            </h2>
            <FollowUs />
          </div>
        </Form>
      )}
    </Formik>
  );
};
