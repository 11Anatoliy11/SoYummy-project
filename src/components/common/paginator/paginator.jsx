
import ResponsivePagination from 'react-responsive-pagination';
import { useState, useEffect } from 'react';
import { PaginatorContainer } from './paginator.styled';
import { ReactComponent as ArrowLeft } from 'images/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'images/svg/arrow-right.svg';
import Button from 'components/Button/Button';

export const Paginator = ({
  currentPage,
  pagesCout,
  parendContainerId,
  onPaginate,
  decreasePixels = 100,
  extraClassName = "paginator",
  pageItemClassName = "paginator-item",
  pageLinkClassName = "paginator-link"
}) => {

  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    const container = document.getElementById(parendContainerId);
    if (!container) {
      return;
    }
    const width = container?.offsetWidth
    setWindowWidth(width - decreasePixels);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  });

  return (
    <PaginatorContainer>
      <ResponsivePagination
        current={currentPage}
        total={pagesCout}
        extraClassName={extraClassName}
        previousLabel={
          <Button
            text={<ArrowLeft />}
            aria-hidden="true"
            className="button">
          </Button>
        }
        nextLabel={
          <Button
            text={<ArrowRight />}
            aria-hidden="true"
            className="button">
          </Button>
        }
        pageItemClassName={pageItemClassName}
        pageLinkClassName={pageLinkClassName}
        onPageChange={onPaginate}
        maxWidth={windowWidth}
      />
    </PaginatorContainer>
  )
}