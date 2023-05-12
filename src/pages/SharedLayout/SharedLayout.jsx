import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from 'components/Loader/Loader';
import { SharedLayoutContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayoutContainer>
  );
};

export default SharedLayout;
