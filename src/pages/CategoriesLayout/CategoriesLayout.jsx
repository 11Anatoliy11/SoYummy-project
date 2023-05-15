import { Loader } from 'components/common';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const CategoriesLayout = () => {
  return (
    <>
      (// список категорій)
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CategoriesLayout;
