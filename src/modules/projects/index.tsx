import Image from "next/image";
import {
  projectContainer,
  projectInformation,
  projectTile,
  projectTitle,
  imageContainer,
  carousel,
  images,
  projectContent,
  divider,
} from "./style";
import { Carousel } from "react-responsive-carousel";
import { PROJECT_ITEMS } from "@/constants";

const Project = () => {
  return (
    <div className={projectContainer}>
      <h3 className={projectTitle}>PROJECTS</h3>
      <div className={projectInformation}>
        {PROJECT_ITEMS.map((project) => {
          return (
            <>
              <div key={project.id} className={projectTile}>
                <div className={projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
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
                      <div className={images} key={image.imageId}>
                        <Image src={image.src} layout="fill" alt={image.alt} />
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
  );
};

export default Project;
