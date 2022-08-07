import {SecondaryButton, TertiaryButton} from "../Buttons/Buttons";
import styles from './UserActions.module.css';

export function UserActions() {
  return (
    <div className={styles.UserActions}>
      <TertiaryButton id="login" name="login" type="button" text="Login"/>
      <SecondaryButton id="register" name="register" type="button" text="Register"/>
    </div>
  )
}