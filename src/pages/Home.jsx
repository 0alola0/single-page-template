import { Helmet } from "react-helmet-async";
import { About, Footer, Header, Services, Slider } from "../components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="check out information about our company and services here"
        />
        <link rel="canonical" href="https://single-page-template.vercel.app/home" />
      </Helmet>

      <Header />
      <Services />
      <Slider />
      <About />
      <Footer />
    </>
  );
};

export default Home;
