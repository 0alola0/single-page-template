import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PAGES from "../PAGELIST.json";

const UnderConstruction = () => {
  let { name } = useParams();
  const page = PAGES.find((p) => p.title == name);

  return (
    <div>
      <Helmet>
        <title>{page?.title}</title>
        <meta name="description" content={page?.content} />
        <link rel="canonical" href={page?.linkHref} />
      </Helmet>

      <div className="flex flex-col items-center mt-56">
        <h4>{page?.title} is currently under construction</h4>
        <img src="construction.jpg" alt="under construction image" />
      </div>
    </div>
  );
};

export default UnderConstruction;
