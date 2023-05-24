import { useEffect, useState, useMemo } from 'react';
import { Loader } from 'components/Common';
import { Suspense } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from 'react-router';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import {
  LayoutContainer,
} from './CategoriesLayout.styled';
import recipes from 'data/recipes.json';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const CategoriesLayout = () => {
  const categoryList = useMemo(() => new Set(recipes.map(recipe => recipe.category).sort()), []);
  const params = useParams();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setValue([...categoryList]?.findIndex(it => it.toLowerCase() === params?.categoryName?.toLowerCase()))
  }, [categoryList, params.categoryName]);

  const handleTabClick = (category, index) => {
    if (index === value) {
      return;
    }
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
