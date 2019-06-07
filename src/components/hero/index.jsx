import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  height: 280px;
  background-color: #8ECA62;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 450px) {
    height: 320px;
  }

  @media screen and (min-width: 650px) {
    height: 350px;
  }

  @media screen and (min-width: 850px) {
    height: 450px;
  }

  @media screen and (min-width: 1024px) {
    height: 460px;
  }
`;

const ContainerLayout = styled.div`
  width: 100%;
  max-width: ${({ home }) => (home ? '800px' : '1000px')};
`;

const Text = styled(Typography)`
  color: #fff;
  font-family: Lato;
  line-height: normal;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -0.01em;
  padding-top: 90px;
  padding-bottom: 25px;

  @media screen and (min-width: 450px) {
    ${'' /* font-size: 75px; */}
    padding-top: 110px;
  }

  @media screen and (min-width: 650px) {
    font-size: 90px;
    font-weight: 900;
    padding-top: 200px;
  }
`;

const Hero = ({ title, home }) => (
  <Wrapper>
    <ContainerLayout {...{ home }}>
      <Text>{title}</Text>
    </ContainerLayout>
  </Wrapper>
);

export default Hero;

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};
