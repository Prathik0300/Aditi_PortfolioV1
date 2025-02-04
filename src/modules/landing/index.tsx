import { landingContainer, contentContainer, linkContainer } from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Landing = () => {
  return (
    <div className={landingContainer}>
      <div className={contentContainer}>
        <p>HELLO!</p>
        <h1>
          <span>I&apos;m</span> Aditi
        </h1>
        <h1>Rana</h1>
      </div>
      <div className={linkContainer}>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/aditi-rana-27435b1b7/"
        >
          <LinkedInIcon />
        </Link>
        <Link target="_blank" href="mailto:aditirana147@gmail.com">
          <EmailIcon />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
