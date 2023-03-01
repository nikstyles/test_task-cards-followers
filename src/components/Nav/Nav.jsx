import { NavList, Logo, Link } from './Nav.styled';
import logo from '../../images/Logo.svg';

export default function Nav() {
  return (
    <NavList>
      <Link href="https://goit.global/ua/" target="_blank">
        <Logo src={logo} alt="logo GoIT" />
      </Link>
    </NavList>
  );
}
