import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import { projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import HomeFeatures from "../../components/homefeatures/HomeFeatures";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <HomeFeatures />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
      <Footer />
    </div>
  );
};

export default Home;
