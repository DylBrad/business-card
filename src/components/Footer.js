import { BsInstagram } from "react-icons/bs";
import { SiBehance } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";




function Footer() {
  return(
    <footer className="footer--container">
      <div className="footer--icons">
        <BsInstagram 
            className="footer--icon" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.instagram.com/lugalvaopelomundo/?hl=en';
          }}
        />
        <SiBehance 
            className="footer--icon" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://www.behance.net/luizacalvacanti';
            }}
        />
        <FaLinkedinIn 
            className="footer--icon" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://www.linkedin.com/in/luiza-cavalcanti-342228126/';
            }}
        />
      </div>
    </footer>
  )
}

export default Footer;