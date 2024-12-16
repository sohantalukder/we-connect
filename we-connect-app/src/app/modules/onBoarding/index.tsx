import React from 'react';
import Button from '@components/button/button/Button.component';
import Container from '@layouts/Container.layout';
import rs from '@styles/responsiveSize.style.asset';

const OnBoardingIndex = () => {
  return (
    <Container>
      <Button text="Get Started" borderRadius={rs(100)} />
    </Container>
  );
};

export default OnBoardingIndex;
