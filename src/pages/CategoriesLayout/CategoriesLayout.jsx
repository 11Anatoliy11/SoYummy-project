import { Loader } from 'components/Common';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import {
  LayoutContainer,
  ListOfCategories,
  CategoryItem,
} from './CategoriesLayout.styled';
import { useHorizontalScroll } from 'hooks/useHorizontalScroll';
import { useSelector } from 'react-redux';
import { recipeSelector } from 'redux/recipes/recipe-select';

const CategoriesLayout = () => {
  const categoryList = useSelector(recipeSelector.getCategoryList);

  const scrollRef = useHorizontalScroll();

  const handleClick = (event) => {
    // фунція яка "докручує" категорію, якщо на неї клікнули поки було видно тільки якусь її частину
    const linkElement = event.target;
    const listItemElement = linkElement.parentElement;

    const containerElement = scrollRef.current;

    const listItemRect = listItemElement.getBoundingClientRect();
    const containerRect = containerElement.getBoundingClientRect();

    const listItemLeft = listItemRect.left - containerRect.left;
    const listItemRight = listItemRect.right - containerRect.right;

    const scrollLeft = containerElement.scrollLeft;

    if (listItemLeft < 0) {
      containerElement.scrollTo({
        left: scrollLeft + listItemLeft,
        behavior: 'smooth',
      });
    } else if (listItemRight > 0) {
      containerElement.scrollTo({
        left: scrollLeft + listItemRight,
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <PageTitleSection text="Categories" />
      <LayoutContainer >
        <ListOfCategories ref={scrollRef}>
          {categoryList && [...categoryList]?.map(category => (
            <CategoryItem key={category}>
              <NavLink to={`/categories/${category.toLowerCase()}`} onClick={handleClick}>
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
