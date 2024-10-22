import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from "@mui/icons-material/X";
import "./styles/Footer.css";

const Footer = () => {

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={() => openLink('https://www.instagram.com/beeyzamu/')} />
        <XIcon onClick={() => openLink('https://twitter.com/benibisalarmisn?s=11&t=OOxeA8znFmlrVaK3MCCZRQ')} />
      </div>
      <p>Tüm hakları saklıdır.</p>
    </div>
  );
};

export default Footer;