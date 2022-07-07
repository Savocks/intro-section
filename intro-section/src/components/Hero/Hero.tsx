import heroImage from '../../assets/images/image-hero-mobile.png';
import './Hero.css';
import {PrimaryButton} from "../Buttons/Buttons";
import {SponsorContainer} from "../Sponsor/Sponsor";
import {HeroImage} from "./HeroImage/HeroImage";

export function Hero() {
  return (
    <div className="hero">
      <HeroImage className="hero__image" />
      <div className="hero__content">
        <h1 className="hero__title">Make remote work</h1>
        <p className="hero__text">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <PrimaryButton className="hero__button" id="hero-button" name="hero-button" type="button" text="Learn More" />
        <SponsorContainer />
      </div>
    </div>
  )
}