import React from 'react';
import ContainerWrapper from './style';

const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
}) => {
  const addAllClasses = ['container'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
      mobileGutter={mobileGutter}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
