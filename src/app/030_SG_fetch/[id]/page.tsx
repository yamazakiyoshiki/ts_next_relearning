import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";
import ArticleListModel from "@/models/articleList";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return {
    title: article.title,
    description: article.text,
  };
}

export async function generateStaticParams() {
  const data: ArticleListModel = await fetch(ENDPOINT).then((res) =>
    res.json()
  );
  console.log(data);
  return data.articles?.map((record) => ({ id: record.id }));
}

export default async function Detail({ params }: { params: { id: string } }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
