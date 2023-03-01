import { Container } from './App.styled';
import CardsList from './CardsList/CardsList';
import Nav from './Nav/Nav';

export const App = () => {
  return (
    <>
      <Nav />
      <Container>
        <CardsList />
      </Container>
    </>
  );
};
