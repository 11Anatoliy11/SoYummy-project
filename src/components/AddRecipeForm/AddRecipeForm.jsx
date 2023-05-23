import * as yup from 'yup';
import recipes from 'data/recipes.json';
import schemaAddRecipe from 'components/utils/schemaAddRecipe';
import { Formik, Field} from 'formik';
import addPhoto from "images/upload-recipe.png";
import { useDispatch, useSelector } from 'react-redux';
import { addOwnRecipes } from 'redux/ownRecipes/own-operation';
import { ReactComponent as Minus } from '../../images/svg/Minus.svg';
import { ReactComponent as Plus } from '../../images/svg/Plus.svg';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
// MUI
import {
  FormGroup,
  InputAdornment,
  MenuItem,
  Stack,
} from '@mui/material';
import { AddBtn, AddRemoveBtn, AutocompleteStyled, BtnStyledAdd, BtnStyledDel, CounterValue,FieldStyled, FormStyled, ImgWrapper, IngredientStyled, IngredientWrapper, MeasureInputWrapper, MeasureStyled, RemoveBtn, SelectStyled, StyledTextarea, Title, TitleWrapper, WrapperContainer} from './AddRecipe.styled';
import { useState ,useEffect} from 'react';
import { recipeSelector } from 'redux/recipes/recipe-select';
import { useWindowSize } from 'react-use';


const initialValues = {
      file: null,
      title: '',
      description: '',
      category: '',
      time: '',
      ingredients: [],
      instructions: '',
    }


const measures = ["gr","kg","ml","pcs","tbs","tsp","liters"];

export const AddRecipeForm = () => {
  const {width} = useWindowSize();
  const ingredientList = useSelector(recipeSelector.getIngredientList);
  const categoryList =  useSelector(recipeSelector.getCategoryList);

  const dispatch = useDispatch();
  
  const handleFormSubmit = (values,actions) => {
    
    const formattedIngredients = values.ingredients.map(item => {
      let ingredient = ingredientList.find(el => item.name === el.ttl);
      return {id:ingredient._id,measure:`${item.quantity} ${item.measure}`}
    });
    
    const formData = new FormData();
    
    formData.append("title", values.title);
    formData.append("thumb", values.file);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("time", values.time);
    formData.append("formattedIngredients", JSON.stringify(formattedIngredients));
    formData.append("instructions", values.instructions);
   

    const {resetForm} = actions;
   
    dispatch(addOwnRecipes(formData));
    resetForm({
      values:initialValues,
    })
  };

 
  const handleAddIngredient = (values, setFieldValue) => {
    const ingredients = [...values.ingredients, { name: '', measure: '' ,quantity:''}];
    setFieldValue('ingredients', ingredients);
  };

  const handleRemoveLast = (values, setFieldValue) => {
    
    if(values.ingredients.length === 0) return;
    const ingredients = [...values.ingredients]
    ingredients.pop();
    setFieldValue('ingredients', ingredients);
  };

  const handleRemoveIngredient = (index, values, setFieldValue) => {
    const ingredients = [...values.ingredients];
    ingredients.splice(index, 1);
    setFieldValue('ingredients', ingredients);
  };


  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schemaAddRecipe}
      onSubmit={handleFormSubmit}
    >
      {({ errors,touched,dirty,isValid,values, isSubmitting, setFieldValue ,handleChange}) => (
        <FormStyled encType="multipart/form-data">
           <FormGroup sx={{ gap: 2, width: '100%' }}>
          <ImgWrapper>
            <label htmlFor="photo"><img src={addPhoto} alt="add recipe pic" style={{cursor:"pointer"}} /></label>
            <input
              type="file"
              id="photo"
              name="file"
              accept="image/*"
              onChange={(e) =>  setFieldValue('file', e.target.files[0])}
              
              style={{display: "none"}}
            />
          
          <Stack
          spacing={2}
          direction='column'
          sx={{width:"100%"}}>
            
            <Field 
              as={FieldStyled}
              placeholder="Enter item title"
              variant="standard"
              type="text"
              name="title" 
              value={values.title}
              onChange={handleChange}
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
              />
            
            <Field 
              as={FieldStyled} 
              placeholder="Enter about recipe "
              variant="standard"
              type="text" 
              name="description" 
              value={values.description}
              onChange={handleChange}
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />

            < Field
              as={FieldStyled}
              variant="standard"
              placeholder="Category"
              disabled
              name="Category title"
              type="text" 
              sx={{borderBottom:"none",backgroundColor: '#ffd60a',}}
              InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SelectStyled
                      sx={{ "& .MuiSvgIcon-root": { 
                        color: "#8BAA36" 
                      } }}
                      variant='standard'
                      IconComponent={ExpandMoreIcon}
                      // MenuProps={MenuProps}
                      onChange={handleChange}
                      name="category"
                      value={values.category}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: '#8BAA36',//White
                            height: '250px',
                            width:'150px',
                            '& .MuiMenuItem-root': {
                              padding: 0.5,
                              fontSize:'14px',
                              fontFamily:'Poppins',
                              textAlign:"center",
                            },
                           
                          },
                        },
                      }}
                      >
                      {categoryList.map((value,idx) => (
                        <MenuItem value={value} key={idx} >
                          {value}
                        </MenuItem>
                      ))}
                      </SelectStyled>
                    </InputAdornment>
                  ),
                }}/>
            
            < Field
              as={FieldStyled}
              variant="standard"
              placeholder="Cooking time"
              type="text" 
              name="Cooking time"
              disabled={true}
              
              InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SelectStyled
                      sx={{ 
                        "& .MuiSvgIcon-root": { color: "#8BAA36" } 
                      }}
                      variant='standard'
                      IconComponent={ExpandMoreIcon}
                      onChange={handleChange}
                      value = {values.time}
                      name = 'time'
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: '#8BAA36',//White
                            height: '250px',
                            width:'150px',
                            '& .MuiMenuItem-root': {
                              padding: 0.5,
                              fontSize:'14px',
                              fontFamily:'Poppins',
                              textAlign:"center",
                            },
                           
                          },
                        },
                      }}
                      >
                      {Array.from({ length: Math.ceil((125 - 5) / 5) }, (_, index) => 5 + index * 5).map((value,index) => (
                        <MenuItem value={value} key={index}>
                          {value} min
                        </MenuItem>
                      ))}
                      </SelectStyled>
                    </InputAdornment>
                  )
              
                }}/>
          </Stack>
          </ImgWrapper>

        <WrapperContainer>
          <TitleWrapper >
            <Title>Ingredients</Title>
            <AddRemoveBtn >
            <BtnStyledDel
              type="button"
              onClick={() => handleRemoveLast(values, setFieldValue)}
            >
              <Minus/>
            </BtnStyledDel>
            <CounterValue>{values.ingredients?.length}</CounterValue>
            <BtnStyledAdd
              type="button"
              onClick={() => handleAddIngredient(values, setFieldValue)}
            >
              <Plus/>
            </BtnStyledAdd>
            </AddRemoveBtn>
            </TitleWrapper>

            {Array.from(values.ingredients).map((ingredient,index) => (
              <IngredientWrapper key={index}>
                <AutocompleteStyled
                  options={ingredientList.map(item => item.ttl)}
                  name={`ingredients${[index]}.name`}
                  onChange={(e,value)=>{
                    console.log(value)
                    setFieldValue(`ingredients[${index}].name`,value);
                  }}
                  value={values.ingredients[index].name}
                  renderInput={(params) => (
                    <IngredientStyled
                      {...params}
                      placeholder="Select an ingredient"
                      
                      name={`ingredients${[index]}.name`}
                      
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          
                        },
                      }}
                      sx={{
                        '& .MuiAutocomplete-popper': {
                          fontFamily: 'poppins',
                          fontSize: 14,
                        },
                      }}
                    />
                  
                )}
                autoComplete={false}
                popupIcon={<ExpandMoreIcon sx={{fill:'#8BAA36'}}/>}
                clearIcon={<DeleteForeverIcon fontSize='small' sx={{fill:'rgb(224, 92, 26)'}}/>}
                sx={{
                  width: '300px' ,
                  "& .MuiAutocomplete-popper.MuiAutocomplete-option":{
                    fontFamily:"poppins",
                    fontSize:"18px",
                  }
                }}
                />

            <MeasureInputWrapper>
            < Field
              as={MeasureStyled}
              placeholder="qt"
              type="text" 
              name={`ingredients[${index}].quantity`}
              onChange={handleChange}
              value={values.ingredients[index].quantity}
              InputProps={{
                style:{
                  // width:'130px',
                },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SelectStyled
                      sx={{ 
                        "& .MuiSvgIcon-root": { color: "#8BAA36" } 
                      }}
                      variant='standard'
                      IconComponent={ExpandMoreIcon}
                      onChange={handleChange}
                      value = {values.ingredients[index].measure}
                      name = {`ingredients[${index}].measure`}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: '#8BAA36',//White
                            height: '90px',
                            width:'79px',
                            '& .MuiMenuItem-root': {
                              padding: 0.5,
                              fontSize:'18px',
                              fontFamily:'Poppins',
                              textAlign:"center",
                            },
                           
                          },
                        },
                      }}
                      >
                      {measures.map((value,index) => (
                        <MenuItem value={value} key={index}>
                          {value}
                        </MenuItem>
                      ))}
                      </SelectStyled>
                    </InputAdornment>
                  )
              
                }}/>
                </MeasureInputWrapper>

                <RemoveBtn
                  type="button"
                  onClick={() =>
                    handleRemoveIngredient(index, values, setFieldValue)
                  }
                >
                  <ClearIcon/>
                 
                </RemoveBtn>
              </IngredientWrapper>
            ))}
         </WrapperContainer>

          <WrapperContainer>
            <Title>Recipe Preparation</Title>
            <Field
              as={StyledTextarea}
              name="instructions"
              placeholder="Enter recipe"
              onChange={handleChange}
              value={values.instructions}
              multiline
              rows={6}
              rowsMax={20}
              // style={{ width: '100%' }}
            />
            
          </WrapperContainer>

          <AddBtn type="submit" >
            Add
          </AddBtn>
          </FormGroup>
        </FormStyled>
      )}
    </Formik>
  );
};
