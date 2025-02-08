import { SERVICES } from "@/constants";
import {
  servicesContainer,
  servicesTitle,
  servicesContent,
  serviceTile,
} from "./style";
import { usePortfolioContext } from "@/hooks/usePortfolioContext";

const Services = () => {
  const {
    contextValue: { servicesRef },
  } = usePortfolioContext();

  return (
    <>
      <div className="offsetContainer" ref={servicesRef} />
      <div className={servicesContainer}>
        <h3 className={servicesTitle}>THINGS I CAN OFFER</h3>
        <div className={servicesContent}>
          {SERVICES.map((service) => {
            return (
              <div className={serviceTile} key={service.serviceName}>
                <h3>{service.serviceName}</h3>
                <p>{service.serviceDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
