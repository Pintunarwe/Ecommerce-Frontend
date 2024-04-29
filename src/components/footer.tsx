import { Link } from "react-router-dom";
import vg from "../assets/logo.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={vg}
          alt="Founder"
        />

        <h2>Pintu Narwe</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <Link to="https://www.linkedin.com/in/pintu-narwe-b23b75246/" target={"blank"}>
            <AiFillLinkedin />
          </Link>
          <Link to="https://www.instagram.com/iampintunarwe/" target={"blank"}>
            <AiFillInstagram />
          </Link>
          <Link to="https://github.com/Pintunarwe" target={"blank"}>
            <AiFillGithub />
          </Link>
        </article>
      </aside>
      <Link to="/">
        <AiOutlineArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;