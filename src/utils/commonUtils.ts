import { saveAs } from "file-saver";

export const downloadResume = () => {
  saveAs("/assets/aditi_rana_resume.pdf", "ADITI_RANA_RESUME.pdf");
};
