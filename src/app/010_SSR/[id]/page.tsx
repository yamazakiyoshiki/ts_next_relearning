// import ClientComp from "../components/ClientComp";
import { ENDPOINT } from "@/constants";
// import ArticleList from "@/components/articleList";/
import ArticleListModel from "@/models/articleList";
import Article from "@/components/article";

export default async function SSR({ params }: { params: { id: string } }) {
  console.log(params);
  const article: Promise<ArticleListModel> = await fetch(
    `${ENDPOINT}/${params.id}`,
    {
      next: { revalidate: 10 },
    }
  ).then((res) => res.json());
  return (
    <>
      <Article data={article} />
    </>
  );
}
