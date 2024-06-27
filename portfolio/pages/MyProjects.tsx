import React, { useState } from "react";
import BackGround3 from "../components/BackGround3";
import Image from "next/image";
import { GroupomaniaV2 } from "@/datas/carousselData";
import { PickerWheel } from "@/datas/carousselData";
import { OdenWeeb } from "@/datas/carousselData";
import { Sandman } from "@/datas/carousselData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyProjects = () => {
  const [showDescription, setShowDescription] = useState([
    false, // Sandman
    false, // GroupomaniaV2
    false, // PickerWheel
    false, // OdenWeeb
  ]);

  const handleDescriptionToggle = (index: number) => {
    const newShowDescription = [...showDescription];
    newShowDescription[index] = !newShowDescription[index];
    setShowDescription(newShowDescription);
  };

  const buttonText = (index: number) => {
    return showDescription[index]
      ? "Masquer la description du projet"
      : "Afficher la description du projet";
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <section id="myProjects" className="myProjects">
      <div className="myProjects__content">
        <h2 className="myProjects__title">Les projets dont je suis fier</h2>
        <div className="myProjects__cards--flex">
          <div className="myProjects__project">
            <div className="myProjects__cards">
              <h3>
                <a href="https://oden-weeb.vercel.app/" target="blank">
                  Sandman
                </a>
              </h3>

              {showDescription[0] ? (
                <div className="myProjects__description">
                  <p>
                    Découvrez Sandman, un jeu mobile développé en C# avec Unity.
                    <br />
                    Les joueurs doivent rapidement et précisément cliquer sur
                    <br />
                    des personnages apparaissant aléatoirement aux fenêtres d'un
                    <br />
                    immeuble pour les endormir avec du sable soporifique et
                    <br />
                    accumuler des points. Le rythme du jeu s'accélère
                    <br />
                    progressivement, offrant une expérience captivante et
                    <br />
                    dynamique en pixel art.
                  </p>
                </div>
              ) : (
                <Slider {...settings} className="caroussel">
                  {Sandman.map(({ id, cover, alt }) => {
                    return (
                      <div key={id}>
                        <a href="https://oden-weeb.vercel.app/" target="blank">
                          <Image
                            className="myProjects__img"
                            src={cover}
                            alt={alt}
                            width={500}
                            height={200}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
            <button
              className="myProjects__DescriptionBtn"
              onClick={() => handleDescriptionToggle(0)}
            >
              {buttonText(0)}
            </button>
          </div>

          <div className="myProjects__project">
            <div className="myProjects__cards">
              <h3>
                <a
                  href="https://github.com/Marvinrn/groupomaniaV2"
                  target="blank"
                >
                  GroupomaniaV2
                </a>
              </h3>

              {showDescription[1] ? (
                <div className="myProjects__description">
                  <p>
                    Un réseau social d'entreprise en React, Express et MongoDB.
                    <br />
                    - Création et connexion d'utilisateurs enregistrés dans
                    MongoDB.
                    <br />
                    - Données personnelles sécurisées.
                    <br />
                    - Publications avec/sans photos.
                    <br />
                    - Suppression de ses propres publications.
                    <br />
                    - Rôle d'administrateur pour suppression de publications.
                    <br />
                    - Fonctionnalité de like/annulation de like.
                    <br />- Routes sécurisées.
                  </p>
                </div>
              ) : (
                <Slider {...settings} className="caroussel">
                  {GroupomaniaV2.map(({ id, cover, alt }) => {
                    return (
                      <div key={id}>
                        <a
                          href="https://github.com/Marvinrn/groupomaniaV2"
                          target="blank"
                        >
                          <Image
                            className="myProjects__img"
                            src={cover}
                            alt={alt}
                            width={500}
                            height={200}
                          />
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
            <button
              className="myProjects__DescriptionBtn"
              onClick={() => handleDescriptionToggle(1)}
            >
              {buttonText(1)}
            </button>
          </div>

          <div className="myProjects__project">
            <div className="myProjects__cards">
              <h3>
                <a href="https://picker-wheel.vercel.app/" target="blank">
                  PickerWheel
                </a>
              </h3>
              {showDescription[2] ? (
                <div className="myProjects__description">
                  <p>
                    PickerWheel est un site web développé avec TypeScript et
                    <br />
                    Next.js, proposant deux jeux de tirage au sort entièrement
                    <br />
                    aléatoires.
                    <br />
                    -Le 1er jeu est une roue de tirage au sort entièrement codée
                    <br />
                    à la main. Entrer une valeur ajoute un segment à la roue et
                    <br />
                    la divise selon le nombre de valeurs. Appuyer sur "Spin"
                    <br />
                    pour laisser le hasard choisir un gagnant.
                    <br /> -Le deuxième jeu est une version classique du jeu de
                    pile ou face.
                  </p>
                </div>
              ) : (
                <Slider {...settings} className="caroussel">
                  {PickerWheel.map(({ id, cover, alt }) => {
                    return (
                      <div key={id}>
                        <a
                          href="https://picker-wheel.vercel.app/"
                          target="blank"
                        >
                          <Image
                            className="myProjects__img"
                            src={cover}
                            alt={alt}
                            width={500}
                            height={200}
                          />
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
            <button
              className="myProjects__DescriptionBtn"
              onClick={() => handleDescriptionToggle(2)}
            >
              {buttonText(2)}
            </button>
          </div>

          <div className="myProjects__project">
            <div className="myProjects__cards">
              <h3>
                <a href="https://oden-weeb.vercel.app/" target="blank">
                  OdenWeeb
                </a>
              </h3>
              {showDescription[3] ? (
                <div className="myProjects__description">
                  <p>
                    Oden Weeb est mon tout premier projet de découverte et
                    <br />
                    d'entraînement à React et Sass centré sur ma passion pour
                    <br />
                    l'univers du manga c'est pourquoi je le présente ici car il
                    <br />
                    me tient beaucoup à cœur.
                    <br />
                    Sur ce site vous pourrez trouver l'ensemble de mes
                    <br />
                    préférences en matière d'animé/manga ainsi que les
                    <br />
                    musiques d'animé
                  </p>
                </div>
              ) : (
                <Slider {...settings} className="caroussel">
                  {OdenWeeb.map(({ id, cover, alt }) => {
                    return (
                      <div key={id}>
                        <a href="https://oden-weeb.vercel.app/" target="blank">
                          <Image
                            className="myProjects__img"
                            src={cover}
                            alt={alt}
                            width={500}
                            height={200}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
            <button
              className="myProjects__DescriptionBtn"
              onClick={() => handleDescriptionToggle(3)}
            >
              {buttonText(3)}
            </button>
          </div>
        </div>
      </div>
      <BackGround3 />
    </section>
  );
};

export default MyProjects;
