import { AddRecipe } from 'components/AddRecipe/AddRecipe';
// import { UserLogout } from '../../components/UserLogoutModal';
import { UserLogoModal } from '../../components/UserLogoModal';

const AddRecipesPage = ({onClose}) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  return (
  <>
  <AddRecipe />
  {/* <UserLogout /> */}
  <UserLogoModal onClose={handleKeyDown}/>
  </>);
};

export default AddRecipesPage;
