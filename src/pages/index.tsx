import Landing from "@/modules/landing";
import { componentWrapper } from "./style";
import Navbar from "@/modules/navbar";
import Project from "@/modules/projects";

export default function Home() {
  return (
    <div className={componentWrapper}>
      <Navbar />
      <Landing />
      <Project />
    </div>
  );
}
