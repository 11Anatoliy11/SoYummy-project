import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './loader.style'

export const Loader = ({className}) => (
  <LoaderContainer className={className}>
    {' '}
    <Circles
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </LoaderContainer>
);
