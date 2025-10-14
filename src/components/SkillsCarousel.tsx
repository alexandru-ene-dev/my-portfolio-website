import carouselSkills from "@/utils/skillsData";

const SkillsCarousel = () => {
  const skillSlideElements = carouselSkills.map((skill, index) => {
    return (
      <li className="slide dark:opacity-80 dark:hover:opacity-90 dark:transition-opacity" key={`${skill.name}-${index}`}>
        <img className="object-contain w-full h-full" src={`/images/skills/${skill.img}`} alt={`${skill.name}`} />
      </li>
    );
  });


  return (
    <div className="carousel-track-wrap mt-10">
      <ul className="carousel-track">
        {skillSlideElements}
      </ul>
    </div>
  );
};

export default SkillsCarousel;
