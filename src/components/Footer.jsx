// Importing icone to add in footer component
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="main-footer">
        <a href="https://github.com/Marjan-MN">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/marjan-nazari-24a577167/">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </>
  );
}
