import databizLogo from '../../assets/images/client-databiz.svg';
import audiophileLogo from '../../assets/images/client-audiophile.svg';
import meetLogo from '../../assets/images/client-meet.svg';
import makerLogo from '../../assets/images/client-maker.svg';

import styles from './Sponsor.module.css';

const sponsorList: Sponsor[] = [
  {
    imageUrl: databizLogo,
    imageAlt: 'Databiz Logo'
  },
  {
    imageUrl: audiophileLogo,
    imageAlt: 'Audiophile Logo'
  },
  {
    imageUrl: meetLogo,
    imageAlt: 'Meet Logo'
  },
  {
    imageUrl: makerLogo,
    imageAlt: 'Maker Logo'
  },
]

export function SponsorContainer() {
  return (
    <div className={styles.SponsorContainer}>
      { sponsorList.map(({imageAlt, imageUrl}: Sponsor) => (<SponsorItem key={imageAlt} imageUrl={imageUrl} imageAlt={imageAlt}/>))}
    </div>
  )
}

export function SponsorItem(props: Sponsor) {
  return (
    <img className={styles.SponsorItem} src={props.imageUrl} alt={props.imageAlt}/>
  )
}

interface Sponsor {
  imageUrl: string;
  imageAlt: string;
}