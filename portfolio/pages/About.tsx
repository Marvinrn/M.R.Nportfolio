import React, { useEffect, useState } from "react";
import BackGround2 from "../components/BackGround2";
import Image from "next/image";
import mrnJojo from "../assets/Images/mrnJojo1.png";

const calculateAge = (birthdate: Date): number => {
  const today = new Date();
  const birthdateNormalized = new Date(
    birthdate.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );
  let age = today.getFullYear() - birthdateNormalized.getFullYear();

  if (
    today.getMonth() < birthdateNormalized.getMonth() ||
    (today.getMonth() === birthdateNormalized.getMonth() &&
      today.getDate() < birthdateNormalized.getDate())
  ) {
    age--;
  }

  return age;
};

const About: React.FC = () => {
  const birthdate = new Date("1998-08-08");
  const [age, setAge] = useState<number>(calculateAge(birthdate));

  useEffect(() => {
    const calculatedAge = calculateAge(birthdate);
    setAge(calculatedAge);
  }, [birthdate]);

  return (
    <section id="about" className="about">
      <div className="about__content">
        <h2 className="about__title">A PROPOS DE MOI</h2>
        <Image
          src={mrnJojo}
          alt="Dessin de moi en version Jojo Bizarre Adventure"
          width={350}
          height={350}
        />
        <p className="about__description">
          Salut ! Moi, c'est Marvin. J'ai {age} ans et je suis passionné par le
          développement web, ainsi que nouvellement par le game dévelopment et
          le pixel art. J'ai acquis mes compétences dans ces domaines fascinants
          de manière autodidacte, et actuellement, je suis à la recherche d'une
          opportunité d'alternance.
          <br />
          Ma vie est animée par mes deux plus grandes passions : les jeux vidéo
          et l'univers captivant des mangas. Ces deux univers m'inspirent
          constamment et nourrissent ma créativité.
        </p>
      </div>
      <BackGround2 />
    </section>
  );
};

export default About;
