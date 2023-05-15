import { Loader } from 'components/Common';
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
