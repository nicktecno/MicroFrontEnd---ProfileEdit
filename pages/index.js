import algoliasearch from "algoliasearch/lite";
import apiUnlogged from "../services/apiUnlogged";
import HomePage from "../PagesComponents/Home/Home";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_SEARCH_API_KEY
);

const DEFAULT_PROPS = {
  searchClient,
  indexName: process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_INDEX_SEARCH,
};

export default function Home(props) {
  return (
    <>
      <HomePage {...DEFAULT_PROPS} menu={props.menu} banners={props.banners} />
    </>
  );
}

export async function getServerSideProps() {
  const { data: response } = await apiUnlogged.get("/descendant-categories");
  const menuFilter = response.data.filter((filtro) => filtro.name !== "Root");

  let banners = false;

  try {
    const { data: response } = await apiUnlogged.get("/banners");
    banners = response;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      banners,
      menu: menuFilter,
    },
  };
}
