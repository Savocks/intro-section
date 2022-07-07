import {ButtonProps, IconButton, TertiaryButton} from "../Buttons/Buttons";
import styles from './Menu.module.css';
import {useLayoutEffect, useRef, useState} from "react";


export function Menu(props: MenuProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.Menu}
         onMouseOverCapture={() => setHover(true)}
         onMouseOutCapture={() => setHover(false)}>
      <TertiaryButton
        id={props.id}
        name={props.name}
        type={props.type}
        text={props.text}

      />
      { props.menuItemList && props.menuItemList.length > 0 && hover && (
        <div className={styles.MenuContainer}>
          { props.menuItemList.map((menuItem) => (
            <IconButton key={menuItem.text} text={menuItem.text} iconAlt={menuItem.text} iconUrl={menuItem.icon} ></IconButton>
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
  icon: string;
  text: string;
}