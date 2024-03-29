import heroImageMobile from '../../../assets/images/image-hero-mobile.png';
import heroImageDesktop from '../../../assets/images/image-hero-desktop.png';

export function HeroImage(props: HeroImageProps) {
  const isMobile = window.visualViewport.width < 1024;
  return (
    <>
      {isMobile && (<img className={props.className} src={heroImageMobile} alt="Hero mobile"/>)}
      {!isMobile && (<img className={props.className} src={heroImageDesktop} alt="Hero desktop"/>)}
    </>
  )
}

interface HeroImageProps {
  className: string;
}