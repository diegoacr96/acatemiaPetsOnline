import { CourseContainer, A, Img } from "./styles";
import { CourseButton } from "../Buttons";
import coursePic from "/public/images/course.jpg";

export const Course = ({ title, buyLink, infoLink }) => {
  const openInfo = () => {
    window.open(infoLink, "_blank");
  };

  const openBuy = () => {
    window.open(buyLink, "_blank");
  };

  return (
    <CourseContainer>
      <Img src={coursePic} alt="icon not found" />
      <h3>{title}</h3>
      <div>
        <CourseButton onClick={openInfo}>Ver info</CourseButton>
        <CourseButton onClick={openBuy}> Comprar</CourseButton>
      </div>
    </CourseContainer>
  );
};
