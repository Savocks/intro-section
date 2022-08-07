import buttonStyles from './Buttons.module.css';
import classNames from "classnames";
import {ButtonHTMLAttributes, MouseEventHandler, RefAttributes} from "react";

export function PrimaryButton(props: ButtonProps) {
  const buttonClasses = classNames(buttonStyles.PrimaryButton, props.className)
  return (
    <button
      className={buttonClasses}
      id={props.id}
      type={props.type}
      name={props.name}
      disabled={props.disabled}>
      {props.text}
    </button>
  )
}

export function SecondaryButton(props: ButtonProps) {
  const buttonClasses = classNames(buttonStyles.SecondaryButton, props.className)
  return (
    <button
      className={buttonClasses}
      id={props.id}
      type={props.type}
      name={props.name}
      disabled={props.disabled}>
      {props.text}
    </button>
  )
}

export function FullWidthButton(props: ButtonProps) {
  const buttonClasses = classNames(buttonStyles.FullWidthButton, props.className)
  return (
    <button
      className={buttonClasses}
      id={props.id}
      type={props.type}
      name={props.name}
      disabled={props.disabled}>
      {props.text}
    </button>
  )
}

export function TertiaryButton(props: ButtonProps) {
  const buttonClasses = classNames(buttonStyles.TertiaryButton, props.className);
  return (
    <button
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={buttonClasses}
      id={props.id}
      type={props.type}
      name={props.name}
      disabled={props.disabled}>
      {props.text}
    </button>
  )
}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className={buttonStyles.MenuButton}>
      <div className={buttonStyles.MenuButtonIcon}>
        <img src={props.iconUrl} alt={props.iconAlt}  />
      </div>
      <div className={buttonStyles.MenuButtonText}>
        {props.text}
      </div>
    </button>
  )
}

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  className?: string;
  text: string;
  disabled?: boolean;
  id: string;
  name: string;
  type: 'reset' | 'button' | 'submit';
}

export interface IconButtonProps {
  iconUrl: string;
  iconAlt: string;
  text: string;
}