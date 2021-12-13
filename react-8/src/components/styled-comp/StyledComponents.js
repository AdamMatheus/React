import React from 'react';
import { Button } from './button/Button.styles';
import HeaderText from './header/HeaderText';
import Link from './link/Link';
import Wrapper from './wrapper/Wrapper';

const StyledComponents = () => {
  return (
    <Wrapper bgColor="wheat">
      <HeaderText>Clarusway</HeaderText>
      <HeaderText headerColor="purple">Styled Components</HeaderText>
      <Link
        secondary
        href="https://clarusway.com/"
        target="_blank"
        rel="noopener"
      >
        Learn FS Development
      </Link>
      <Button primary>Primary</Button>
      <Button>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
