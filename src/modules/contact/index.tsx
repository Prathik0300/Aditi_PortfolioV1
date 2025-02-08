import { contactContainer, contactTitle, contactContent } from "./style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";

import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";
import { usePortfolioContext } from "@/hooks/usePortfolioContext";

const Contact = () => {
  const isMobile = useIsMobile();
  const {
    contextValue: { contactMeRef },
  } = usePortfolioContext();

  return (
    <>
      <div
        className="offsetContainer"
        ref={contactMeRef as React.RefObject<HTMLDivElement>}
      />
      <div className={contactContainer}>
        <div className={contactTitle}>
          <div>If you&apos;d like to start a</div>
          <div>
            project get in touch
            {isMobile ? <ArrowDownwardIcon /> : <ArrowForwardIcon />}
          </div>
        </div>
        <Link target="_blank" href="mailto:aditirana147@gmail.com">
          <div className={contactContent}>
            <div>
              <EmailIcon />
            </div>
            <div>aditirana147@gmail.com</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Contact;
