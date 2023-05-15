import { Loader } from 'components/common';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import {
  LayoutContainer,
  ListOfCategories,
  CategoryItem,
} from './CategoriesLayout.styled';
import recipes from 'data/recipes.json';

const CategoriesLayout = () => {
  const categoryList = new Set(recipes.map(recipe => recipe.category).sort());
  console.log([...categoryList]);

  return (
    <>
      <LayoutContainer>
        <PageTitleSection text="Categories" />
        <ListOfCategories>
          {[...categoryList]?.map(category => (
            <CategoryItem key={category}>
              <NavLink to={`/categories/${category.toLowerCase()}`}>
                {category}
              </NavLink>
            </CategoryItem>
          ))}
        </ListOfCategories>
      </LayoutContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CategoriesLayout;
