import Hero from '../components/sections/Hero.jsx';
import Projects from '../components/sections/Projects.jsx';
import About from '../components/sections/About.jsx';
import WhyWorkWithMe from '../components/sections/WhyWorkWithMe.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects isHomePage={true} maxProjects={4} />
      <About isHomePage={true} />
      <WhyWorkWithMe />
    </>
  );
};

export default Home;
