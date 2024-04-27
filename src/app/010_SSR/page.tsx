import "./lib";
import ClientComp from "./components/ClientComp";
import { ENDPOINT } from "@/constants";
import ArticleList from "@/components/articleList";
import ArticleListModel from "@/models/articleList";

export default async function SSR() {
  const articles: ArticleListModel = await fetch(ENDPOINT).then((res) =>
    res.json()
  );
  return (
    <>
      <div>SSR Page</div>
      <ClientComp />
      <ArticleList list={articles} basePath="/010_SSR" />
    </>
  );
}
