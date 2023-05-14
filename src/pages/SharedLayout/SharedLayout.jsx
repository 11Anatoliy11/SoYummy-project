import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from 'components/common';
import {
  SharedLayoutContainer
} from './SharedLayout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import Background from 'components/Background/Background';

const SharedLayout = () => {
  return (
    <Background type="Footer">
    <SharedLayoutContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </SharedLayoutContainer>
    </Background>
  );
};

export default SharedLayout;
