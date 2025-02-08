import Landing from "@/modules/landing";
import { componentWrapper } from "./style";
import Navbar from "@/modules/navbar";
import Project from "@/modules/projects";
import AboutMe from "@/modules/about";
import Services from "@/modules/services";
import Contact from "@/modules/contact";
import Footer from "@/modules/footer";

export default function Home() {
  return (
    <div className={componentWrapper}>
      <Navbar />
      <Landing />
      <AboutMe />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
