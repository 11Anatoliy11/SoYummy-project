import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from 'components/Common';
import { SharedLayoutContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import Background from 'components/Background/Background';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SharedLayout = () => {
  const location = useLocation();
  const { recipeId } = useParams();

  return (
    <>
      {recipeId && (
        <Background type="Recipe">
          <SharedLayoutContainer>
            <Header />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <Footer />
          </SharedLayoutContainer>
        </Background>
      )}
      {location.pathname.includes('main') && (
        <Background type="Main">
          <SharedLayoutContainer>
            <Header />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <Footer />
          </SharedLayoutContainer>
        </Background>
      )}
      {!location.pathname.includes('main') && !recipeId && (
        <Background type="Footer">
          <SharedLayoutContainer>
            <Header />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <Footer />
          </SharedLayoutContainer>
        </Background>
      )}
    </>
  );
};

export default SharedLayout;
