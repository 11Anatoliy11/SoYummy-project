import { AddRecipe } from 'components/AddRecipe/AddRecipe';
// import { UserLogout } from '../../components/UserLogoutModal';
import { UserLogoutModal } from '../../components/UserLogoutModal';

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
  <UserLogoutModal onClose={handleKeyDown}/>
  </>);
};

export default AddRecipesPage;
