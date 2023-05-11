import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from 'components/Loader/Loader';
import { SharedLayoutContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayoutContainer>
  );
};

export default SharedLayout;
