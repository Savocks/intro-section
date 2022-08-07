import {TertiaryButton} from "../Buttons/Buttons";
import styles from './Navigation.module.css';
import {Menu, MenuItem} from "../Menu/Menu";
import iconList from '../../assets/images/icon-todo.svg';
import iconCalendar from '../../assets/images/icon-calendar.svg';
import remindersIcon from '../../assets/images/icon-reminders.svg';
import planningIcon from '../../assets/images/icon-planning.svg';

const featuresItemList: MenuItem[] = [
  {
    text: 'Todo list',
    icon: iconList
  },
  {
    text: 'Calendar',
    icon: iconCalendar
  },
  {
    text: 'Reminders',
    icon: remindersIcon
  },
  {
    text: 'Planning',
    icon: planningIcon
  },
]
const companyItemList: MenuItem[] = [
  {
    text: 'History',
    icon: null
  },
  {
    text: 'Our Team',
    icon: null
  },
  {
    text: 'Blog',
    icon: null
  }
]

export function Navigation() {
  return (
    <div className={styles.Navigation}>
      <Menu id="features" name="features" type="button" text="Features"  menuItemList={featuresItemList}/>
      <Menu id="company" name="company" type="button" text="Company" menuItemList={companyItemList}/>
      <TertiaryButton id="careers" name="careers" type="button" text="Careers" />
      <TertiaryButton id="about" name="about" type="button" text="About" />
    </div>
  )
}