import logo from '../../assets/images/logo.svg';
import iconMenu from '../../assets/images/icon-menu.svg'
import './Header.css';
import {SecondaryButton, TertiaryButton} from "../Buttons/Buttons";
import {Navigation} from "../Navigation/Navigation";
import {UserActions} from "../UserActions/UserActions";
export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Snap Logo"/>
      <Navigation />
      <UserActions />
    </header>
  )
}