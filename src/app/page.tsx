

import Dessert from "@/Components/Dessert/Dessert";
import Drink from "@/Components/Drinks/Drinks";
import Experience from "@/Components/Experience/Experience";
import Hero from "@/Components/HeroSection/Hero";
import MainCours from "@/Components/MainCourse/MainCourse";
import StarterMenu from "@/Components/Menu/StartMenu";
import PartnersAndClients from "@/Components/pattnerClient/PattnerClient";

export default function Home() {
  return (

<div>


  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}
