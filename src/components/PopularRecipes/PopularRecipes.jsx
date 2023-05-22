import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { recipeSelector } from 'redux/recipes/recipe-select';
import {
  CommonWrapper,
  FollowUsWrapper,
  ImagePop,
  ImageWrapperPop,
  PopDescription,
  PopTitle,
  PopularWrapper,
  Title,
} from './PopularRecipes.styled';
import { FollowUsPopular } from './FollowUsPopular';
import { Divider } from '@mui/material';

export const PopularRecipes = () => {
  const popular = useSelector(recipeSelector.getPopularRecipes);

  return (
    <CommonWrapper>
      <FollowUsWrapper>
        <Title>Follow us</Title>
        <FollowUsPopular />
      </FollowUsWrapper>
      <div>
        <Title>Popular recipe</Title>
        <PopularWrapper>
          {popular?.map(({ _id, title, description, thumb }) => (
            <div key={_id}>
              <Link to={`/recipes/${_id}`}>
                <ImageWrapperPop>
                  <ImagePop src={thumb} alt={title} />
                  <div>
                    <PopTitle>{title}</PopTitle>
                    <PopDescription>{description}</PopDescription>
                  </div>
                </ImageWrapperPop>
              </Link>
              <Divider />
            </div>
          ))}
        </PopularWrapper>
      </div>
    </CommonWrapper>
  );
};
