import { List } from './CardsList.styled';
import data from '../../assets/users';
import CardItem from '../CardItem/CardItem';
import { useState, useEffect } from 'react';

export default function CardsList() {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem('users')) ?? data
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onFollow = (id, n) => {
    setUsers(
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.followers + n,
            follow: !user.follow,
          };
        } else {
          return user;
        }
      })
    );
  };

  return (
    <List>
      {users?.map(({ id, user, tweets, followers, avatar, follow }) => (
        <CardItem
          key={id}
          id={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          follow={follow}
          onFollow={onFollow}
        />
      ))}
    </List>
  );
}
