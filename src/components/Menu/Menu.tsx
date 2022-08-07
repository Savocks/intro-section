import {ButtonProps, IconButton, TertiaryButton} from "../Buttons/Buttons";
import {useState} from "react";

import styles from './Menu.module.css';

import arrowDown from '../../assets/images/icon-arrow-down.svg';
import arrowUp from '../../assets/images/icon-arrow-up.svg'



export function Menu(props: MenuProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.Menu}
         onMouseOverCapture={() => setHover(true)}
         >
      <TertiaryButton
        id={props.id}
        name={props.name}
        type={props.type}
        text={props.text}
      />
      <span>
        { !hover && <img src={arrowDown} alt="Closed Menu Arrow down"/> }
        { hover &&  <img src={arrowUp} alt="Closed Menu Arrow down"/> }
      </span>
      { props.menuItemList && props.menuItemList.length > 0 && hover && (
        <div className={styles.MenuContainer}
             onMouseOutCapture={() => setHover(false)}
        >
          { props.menuItemList.map((menuItem) => (
            menuItem?.icon ?
              <IconButton key={menuItem.text} text={menuItem.text} iconAlt={menuItem.text} iconUrl={menuItem.icon} /> :
              <TertiaryButton id={menuItem.text} text={menuItem.text} type="button" name={menuItem.text}/>
          ))}
        </div>
      )}
    </div>
  )
}

export function MenuElement(props: MenuItem) {
  return (
    <ul>
      {props.icon && (<img key={props.text} src={props.icon} alt={props.text}/>)}
      <span>{props.text}</span>
    </ul>
  )
}

interface MenuProps extends ButtonProps {
  menuItemList: MenuItem[];
}

export interface MenuItem {
  icon: string | null;
  text: string;
}