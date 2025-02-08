import { ABOUT_ME } from "@/constants";
import { aboutMeContainer, aboutMetitle, aboutMeContent } from "./style";
import { usePortfolioContext } from "@/hooks/usePortfolioContext";

const AboutMe = () => {
  const {
    contextValue: { aboutMeRef },
  } = usePortfolioContext();

  return (
    <>
      <div className="offsetContainer" ref={aboutMeRef as React.RefObject<HTMLDivElement>} />
      <div className={aboutMeContainer}>
        <h3 className={aboutMetitle}>ABOUT ME</h3>
        <div
          className={aboutMeContent}
          dangerouslySetInnerHTML={{ __html: ABOUT_ME }}
        />
      </div>
    </>
  );
};

export default AboutMe;
