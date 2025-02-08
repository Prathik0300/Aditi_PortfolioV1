import Image from "next/image";
import {
  projectContainer,
  projectInformation,
  projectTile,
  projectTitle,
  imageContainer,
  carousel,
  projectLinkBtn,
  images,
  projectContent,
  divider,
  projectLinkContainer,
  projectLinkIcon,
} from "./style";
import { Carousel } from "react-responsive-carousel";
import { PROJECT_ITEMS } from "@/constants";
import { IconButton } from "@mui/material";
import { usePortfolioContext } from "@/hooks/usePortfolioContext";

const Project = () => {
  const {
    contextValue: { projectsRef },
  } = usePortfolioContext();

  return (
    <>
      <div className="offsetContainer" ref={projectsRef} />
      <div className={projectContainer}>
        <h3 className={projectTitle}>PROJECTS</h3>
        <div className={projectInformation}>
          {PROJECT_ITEMS.map((project) => {
            return (
              <>
                <div
                  key={`${project.title}-${project.id}`}
                  className={projectTile}
                >
                  <div className={projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project?.relatedLinks && (
                      <div className={projectLinkContainer}>
                        {project?.relatedLinks?.map((link) => {
                          return (
                            <a
                              target="_blank"
                              href={link.url}
                              key={`${project.title}-link-${link.linkId}`}
                            >
                              <IconButton
                                className={projectLinkBtn}
                                style={{
                                  background: link.backgroundColor,
                                  color: link.contentColor,
                                }}
                              >
                                <link.icon />
                              </IconButton>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className={imageContainer}>
                    <Carousel
                      className={carousel}
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={6000}
                      transitionTime={800}
                      width="100%"
                    >
                      {project?.images?.map((image) => (
                        <div
                          className={images}
                          key={`${project.title}-image-${image.imageId}`}
                        >
                          <Image
                            src={image.src}
                            layout="fill"
                            alt={image.alt}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                {!project.isLast && <hr className={divider} />}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
