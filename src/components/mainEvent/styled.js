import styled from 'styled-components';
import { Typography, CardContent, Button } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOn';
import CalendarIcon from '@material-ui/icons/DateRange';
import imageHack from '../../images/background.jpg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -100px;
`;

const CardContainer = styled(CardContent)`
  padding: 0;
  height: 100%;

  @media screen and (min-width: 850px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
`;

const Description = styled.div`
  padding: 20px;
`;

const DateGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`;

const DateIconStyled = styled(CalendarIcon)`
  color: #42526E;
  padding-right: 8px;
`;

const Date = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: Uppercase;

  @media screen and (min-width: 650px) {
    font-size: 14px;
    font-weight: 900;
  }
`;

const Underline = styled.div`
  width: 45px;
  height: 4px;
  background-color: #243858;
  margin-bottom: 12px;
`;

const Title = styled(Typography)`
  font-family: Lato;
  color: #243858;
  font-size: 35px;
  font-weight: 700;
  line-height: 40px;
  padding-bottom: 14px;

  @media screen and (min-width: 850px) {
    font-size: 42px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0.01em;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 50px;
    line-height: 57px;
  }
`;

const LocationItems = styled.div`
  display flex;
  align-items: center;
  padding-bottom: 14px;
`;

const LocationIconStyled = styled(LocationIcon)`
  color: #42526E;
  padding-right: 5px;
`;

const Location = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05em;

  @media screen and (min-width: 650px) {
    font-size: 14px;
    font-weight: 900;
  }
`;

const DescriptionContainer = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;

  @media screen and (min-width: 850px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Link = styled.a`
  text-decoration: none;
  border-radius: 2px;

  @media screen and (min-width: 650px) {
    margin-right: 10px;
  }
`;

const ButtonStyle = styled(Button)`
  min-width: 200px;
  height: 36px;
  color: rgba(36, 56, 88, 0.7);
  font-family: Lato;
  font-size: 14px;
  line-height: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.035em;
  margin-top: 12px;
  margin-right: 8px;

  && {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const ActionPackButton = styled(Button)`
  min-width: 200px;
  height: 36px;
  color: #fff;
  font-family: Lato;
  font-size: 14px;
  line-height: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.035em;
  margin-top: 12px;

  && {
    background-color: #AD3C64;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 135px;
  order: -1;

  @media screen and (min-width: 850px) {
    order: 1;
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;

const ImageStyle = styled.div`
  background-image: url('${imageHack}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 850px) {
    border-radius: 50%;
    height: 65%;
  }

  @media screen and (min-width: 1024px) {
    height: 300px;
    width: 300px;
  }
`;

export {
  Wrapper,
  CardContainer,
  TextContainer,
  Description,
  DateGroup,
  DateIconStyled,
  Date,
  Underline,
  Title,
  LocationItems,
  LocationIconStyled,
  Location,
  DescriptionContainer,
  ButtonsGroup,
  Link,
  ButtonStyle,
  ActionPackButton,
  ImageContainer,
  ImageStyle,
};

export default {
  Wrapper,
  CardContainer,
  TextContainer,
  Description,
  DateGroup,
  DateIconStyled,
  Date,
  Underline,
  Title,
  LocationItems,
  LocationIconStyled,
  Location,
  DescriptionContainer,
  ButtonsGroup,
  Link,
  ButtonStyle,
  ActionPackButton,
  ImageContainer,
  ImageStyle,
};
