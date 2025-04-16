import { Nav } from "./components/nav";
import { Title } from "./components/title";
import { Services } from "./components/services/services";
import { Contact } from "./components/contact";
import About from "./components/about";
import { Gallery } from "./components/gallery/gallery";
export default function Home() {
  return (
    <>
      <Nav />
      <Title />
      <Services />
      <About />
      <Gallery/>
      <Contact />
    </>
  );
}
