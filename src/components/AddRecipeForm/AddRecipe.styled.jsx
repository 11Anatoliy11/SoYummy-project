import styled from "@emotion/styled";
import { Autocomplete, Select, TextField, TextareaAutosize } from "@mui/material";
import Button from "components/Button/Button";
import { Form } from "formik";

export const FieldStyled = styled(TextField)`
  background: transparent;
  width: 100%;

  @media (min-width: 1280px) {
       width: 405px;
    }
  
  & label.Mui-focused {
    color:${props=>props.theme.colors.searchSelectText};
  }
  & input::placeholder{
    color:rgb(66, 64, 64);
  }
  & input{
    padding:4px 0 18px;
  }
  & input.Mui-disabled::placeholder{
    opacity:0.9;
  }
  & .MuiInputBase-input.Mui-disabled.MuiInput-underline:after{
    border-bottom-color: #E0E0E0;
  }
  & .MuiInputBase-input.Mui-disabled.MuiInput-underline:before{
    border-bottom-color:#E0E0E0;
  }

  & .MuiInputBase-root.MuiInput-root.Mui-disabled:before{
    border-bottom-style:solid;
  }
  & .MuiSelect-select.MuiInputBase-input.MuiInput-input:focus{
    background-color:transparent;
  }
  & .MuiSelect-select.MuiInputBase-input.MuiInput-input{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #E0E0E0;
  }
  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: #E0E0E0; 
  }
  & .MuiInput-underline:before{
    border-bottom: 2px solid #E0E0E0; 
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: #E0E0E0;
    }
  }
`;

export const IngredientStyled = styled(TextField)`
  background:#D9D9D9;
  border-radius: 6px;
  font-family:"poppins";
  font-size:18px;
  & label.Mui-focused {
    color:${props=>props.theme.colors.searchSelectText};
  }
  & input::placeholder{
    color:rgb(66, 64, 64);
    font-family:"poppins";
    font-size:12px;
    @media (min-width: 768px) {
    font-size:18px;
    }
  }
  & input{
    padding:13px 8px 18px;
    font-family:"poppins";
    font-size:12px;
    @media (min-width: 768px) {
    font-size:18px;
    }
    
  }
  & input.Mui-disabled::placeholder{
    opacity:0.9;
  }

  & .MuiSelect-select.MuiInputBase-input.MuiInput-input:focus{
    background-color:transparent;
  }

  & .MuiSelect-select.MuiInputBase-input.MuiInput-input{
    display: flex;
    justify-content: center;
    align-items: center;
  }

 
  & .MuiInput-underline:after {
    border-bottom-color: #E0E0E0;
  }

  & .MuiInput-underline:before{
    border-bottom: transparent; 
  }
  & .MuiInput-underline.Mui-focused:before:focus{
    border-bottom: transparent; 
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: #E0E0E0;
    }
  }
`;

export const MeasureStyled = styled(TextField)`
  background:#D9D9D9;
  border-radius: 6px;
  font-family:"poppins";
  width:90px;

  @media (min-width: 768px) {
    width:130px;
    font-size:18px;
    }
    @media (min-width: 1280px) {
      
    }
& label.Mui-focused {
  color:${props=>props.theme.colors.searchSelectText};
}
& input::placeholder{
  color:rgb(66, 64, 64);
  font-family:"poppins";
  font-size:12px;
  @media (min-width: 768px) {
    width:130px;
    font-size:18px;
    }
}
& input{
  padding:13px 8px 18px;
  font-family:"poppins";
  font-size:12px;
  @media (min-width: 768px) {
    width:130px;
    font-size:18px;
    }
  
}
& input.Mui-disabled::placeholder{
  opacity:0.9;
}

& .MuiSelect-select.MuiInputBase-input.MuiInput-input:focus{
  background-color:transparent;
}

& .MuiSelect-select.MuiInputBase-input.MuiInput-input{
  display: flex;
  justify-content: center;
  align-items: center;
}


& .MuiInput-underline:after {
  border-bottom-color: #E0E0E0;
}

& .MuiInput-underline:before{
  border-bottom: transparent; 
}
& .MuiInput-underline.Mui-focused:before:focus{
  border-bottom: transparent; 
}
& .MuiOutlinedInput-root {
  & fieldset {
    border-color: white;
  }
  &:hover fieldset {
    border-color: white;
  }
  &.Mui-focused fieldset {
    border-color: #E0E0E0;
  }
}
`;

export const AutocompleteStyled = styled(Autocomplete)`
  & .MuiAutocomplete-popper .MuiAutocomplete-option{
    font-family: "poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: calc(27/18);
  }
`;

export const StyledTextarea = styled(TextField)`
   
    
    & .MuiInputBase-root.MuiOutlinedInput-root{
    width: 343px;
    font-family: "poppins";
    font-size: 18px;
    font-weight: 400;
    line-height: calc(27/18);
    padding: 12px;
    border-radius: 6px;
    color: 'grey';
    background:${'#D9D9D9'};
    border:none;

    @media (min-width: 768px) {
      width: 505px;
    }
    @media (min-width: 1280px) {
      
    }
  };

    & .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-multiline.MuiInputBase-formControl.MuiInputBase-colorPrimary.Mui-focused{
      outline:none;
      /* border:2px solid #D9D9D9; */
      
    }


   .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputMultiline{
    border:none;
   }
  
   & .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused{
    border-color: #D9D9D9;
   }
    &:hover {
      border-color: #D9D9D9;
    }
  
    &:focus {
      border-color: #D9D9D9;
      
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `;

export const SelectStyled = styled(Select)`
  
  /* z-index: 10; */
  padding:4px 0 11px;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 768px) {
    font-size:14px;
    }
  `;

export const FormStyled = styled(Form)`
margin-right: 106px;
`;
 
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:50px;

  @media (min-width: 768px) {
      flex-direction: row;
    }
    @media (min-width: 1280px) {
      
    }
`;
export const Title = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.24px;
    margin-bottom:36px;
`  
export const AddBtn = styled(Button)`
  width: 132px;
  height: 45px;
  border-radius: 24px 44px;
  background-color: var(--green-color);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--background-color);
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    width: 184px;
    height: 67px;
  }
`;

export const AddRemoveBtn = styled.div`
    position:relative;
    width:110px;
    height:32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(51, 51, 51, 0.3);
    border-radius: 18px;
`
export const BtnStyledDel = styled.button`
    width: 16px;
    height:16px;
    cursor:pointer ;
    position: absolute;
    left:10%;
`;
export const BtnStyledAdd = styled.button`
    width: 16px;
    height:16px;
    cursor:pointer ;
    position: absolute;
    right:10%;
   
`;

export const  TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width:100%;
`;

export const CounterValue = styled.p`
    margin-left:20px;
    margin-right: 20px;
`;

export const MeasureInputWrapper=  styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:20px;
`;

export const IngredientWrapper = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap:20px;
`;
export const RemoveBtn = styled.button`
    width: 12px;
    height:12px;
    cursor:pointer ;
    position: absolute;
    right:-10%;
    display:flex;
    justify-content: center;
    align-items: center;

    & svg{
      width: 16px;
      height:16px;
    }

    @media (min-width: 768px) {
    font-size:18px;
    right:30px;
    width: 16px;
    height:16px;
    & svg{
      width: 24px;
      height:24px;
    }
    
    }

`;

export const WrapperContainer = styled.div`
    margin-top:100px;
    width:310px;

    @media (min-width: 768px) {
      width:100%;
    }
    @media (min-width: 1280px) {
      
    }
`;