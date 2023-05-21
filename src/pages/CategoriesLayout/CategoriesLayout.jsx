import { Loader } from 'components/Common';
import { Suspense } from 'react';
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import {
  LayoutContainer,
} from './CategoriesLayout.styled';
import recipes from 'data/recipes.json';


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';


const CategoriesLayout = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const categoryList = new Set(recipes.map(recipe => recipe.category).sort());

  const handleTabClick = (category, index) => {
    const categoryPath = `/categories/${category}`;
    navigate(categoryPath);
    setValue(index);
  };

  return (
    <>
      <PageTitleSection text="Categories" />
      <LayoutContainer >
        <Box>
          <Tabs className='categoryItem'
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: theme.colors.mainAccent
              }
            }}
          >
            {[...categoryList]?.map((category, index) => (
              <Tab
                key={category}
                label={category}
                className='tabItem'
                onClick={() => handleTabClick(category, index)}
              />
            ))}
          </Tabs>
        </Box>
      </LayoutContainer >
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CategoriesLayout;
