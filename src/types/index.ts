import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Dispatch, RefObject, SetStateAction } from "react";
import { IconType } from "react-icons/lib";

type RelatedLinkType = {
  linkId: number;
  url: string;
  icon:
    | IconType
    | (OverridableComponent<SvgIconTypeMap<object, "svg">> & {
        muiName: string;
      });
  backgroundColor: string;
  contentColor: string;
  content: string;
};

export type ImagesType = {
  imageId: number;
  src: string;
  alt: string;
};

export type ProjectItemsType = {
  id: number;
  title: string;
  description: string;
  isLast: boolean;
  relatedLinks?: RelatedLinkType[];
  images: ImagesType[];
};

export type ServicesType = {
  id: number;
  serviceName: string;
  serviceDescription: string;
};

export type NavbarContentType = {
  displayName: string;
  id: string;
  navIndex: number;
  isCustomHandler: boolean;
  handler?: () => void;
};

export type PortfolioContextValueType = {
  navbarCollapse: boolean;
  homeRef: RefObject<null | HTMLElement>;
  aboutMeRef: RefObject<null | HTMLElement>;
  projectsRef: RefObject<null | HTMLElement>;
  servicesRef: RefObject<null | HTMLElement>;
  contactMeRef: RefObject<null | HTMLElement>;
  idRefMap: Record<string, null | RefObject<HTMLElement | null>>;
};

export type PortfolioContextUpdaterType = {
  setNavbarCollapse: null | Dispatch<SetStateAction<boolean>>;
};

export type ActiveNavItemType = NavbarContentType & {
  isElementLeftOfActiveNavItem?: boolean;
};
