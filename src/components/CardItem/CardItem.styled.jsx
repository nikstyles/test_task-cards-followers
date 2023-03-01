import styled from 'styled-components';

export const ContactItem = styled.li`
  max-width: 349px;
  height: 460px;
  position: relative;

  text-decoration: none;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1280px) {
    max-width: 380px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BgImage = styled.img`
  display: block;
  padding-top: 28px;
  margin: 0 auto;
`;

export const Line = styled.div`
  margin-top: 18px;
  height: 8px;
  width: 349px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  @media (min-width: 1280px) {
    width: 380px;
  }
`;

export const Elipse = styled.img`
  position: absolute;
  top: 178px;
  left: 134px;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
  @media (min-width: 1280px) {
    top: 178px;
    left: 150px;
  }
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  position: absolute;
  top: 187px;
  left: 143px;
  object-fit: cover;
  border-radius: 50%;
  background: #5736a3;
  @media (min-width: 1280px) {
    top: 187px;
    left: 159px;
  }
`;

export const Tweets = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  margin: 0;
  padding-top: 62px;
`;

export const Followers = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  margin: 0;
  padding-top: 16px;
`;

export const Button = styled.button`
  width: 196px;
  padding: 14px 0;
  background: #ebd8ff;
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  margin-top: 26px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;
  cursor: pointer;

  ${props =>
    props.following &&
    `
      background: #5cd3a8;
    `}
`;
