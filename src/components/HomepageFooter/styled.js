import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import BulbIcon from '../../images/bulb';
import LikeIcon from '../../images/like';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  background: #323130;
`;

const Heading = styled(Typography)`
  && {
    text-transform: Uppercase;
    font-size: 14px;
    font-weight: 900;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #fff;
    margin-bottom: 16px;
  }
`;

const Underline = styled.div`
  width: 45px;
  height: 4px;
  background-color: #fff;
  margin-bottom: 28px;
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

const TextContainer = styled.div`
  padding-left: 24px;
  width: 100%;
  max-width: 360px;
`;

const Title = styled(Typography)`
  && {
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Text = styled(Typography)`
  && {
    font-size: 16px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const BulbIconStyled = styled(BulbIcon)`
  && {
    width: 40px;
    height: 40px;
  }
`;

const LikeIconStyled = styled(LikeIcon)`
  && {
    fill: #fff;
  }
`;

const FooterContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 850px) {
    max-width: 495px;
    margin: 0 auto;
  }
`;

const FooterText = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-family: Lato;
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
  BulbIconStyled,
  LikeIconStyled,
  FooterContainer,
  FooterText,
};

export default {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
  BulbIconStyled,
  LikeIconStyled,
  FooterContainer,
  FooterText,
};
