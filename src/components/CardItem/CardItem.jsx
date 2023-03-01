import {
  ContactItem,
  Logo,
  BgImage,
  Line,
  Elipse,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './CardItem.styled';
import logo from '../../images/Logo.svg';
import bgcard from '../../images/bg_card.png';
import elipse from '../../images/Ellipse.svg';

export default function CardItem({
  id,
  user,
  tweets,
  followers,
  avatar,
  follow,
  onFollow,
}) {
  const isFollow = n => {
    onFollow(id, n);
  };

  const editFollowers = followers.toLocaleString('en-US');

  return (
    <ContactItem>
      <Logo src={logo} alt="logo GoIT" />
      <BgImage src={bgcard} alt="Bg image" />
      <Line />
      <Elipse src={elipse} alt="bg avatar" />
      <Avatar src={avatar} alt={`avatar ${user}`} />

      <Tweets>{tweets} tweets </Tweets>
      <Followers>{editFollowers} Followers</Followers>
      {!follow && <Button onClick={() => isFollow(1)}>Follow</Button>}
      {follow && (
        <Button following onClick={() => isFollow(-1)}>
          Following
        </Button>
      )}
    </ContactItem>
  );
}
