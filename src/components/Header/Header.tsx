import logo from '../../assets/images/logo.svg';
import './Header.css';
import {Navigation} from "../Navigation/Navigation";
import {UserActions} from "../UserActions/UserActions";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Snap Logo"/>
      <Navigation/>
      <UserActions/>
    </header>
  )
}