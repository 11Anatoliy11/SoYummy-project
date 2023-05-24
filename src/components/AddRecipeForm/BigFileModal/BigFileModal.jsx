import Modal from 'components/Modal/Modal';
import {ImgWrapper, Text } from './BigFileModal.styled';
import {ReactComponent as BigImage} from '../../../images/svg/Image-upload.svg'

export const BigFileModal = ({ onClose }) => {
  
  return (
    <Modal className="logoutModal" onClose={onClose}>
        <Text> Image size is too big </Text>
        <ImgWrapper>
          <BigImage/>
        </ImgWrapper>
    </Modal>
  );
};
