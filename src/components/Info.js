import profiler from "../images/profiler.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Info() {
  const copied = () => {
    alert("Email copied to clipboard");
  }

  return (
    <div className="info--container">
      <img className="info--image" src={profiler} alt="Profiler" />
      <h1 className="info--name">Luiza Cavalcanti</h1>
      <h3 className="info--title">Social Media Manager</h3>
      <h4 className="info--email">luizagalsc@gmail.com</h4>
      <div className="info--buttons">
        <CopyToClipboard text="luizagalsc@gmail.com">
          <button  
            className="info--email-button"
            type="button"
            onClick={copied}
          >
            <AiOutlineMail />Email
          </button>
        </CopyToClipboard>
        <button 
          className="info--linkedin-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.linkedin.com/in/luiza-cavalcanti-342228126/';
          }}
        >
          <RiLinkedinFill />LinkedIn
        </button>
      </div>
    </div>
  )
}

export default Info;