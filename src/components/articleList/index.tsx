import ArticleListModel from "@/models/articleList";
import Link from "next/link";

interface ArticleListProps {
  basePath: string;
  list: ArticleListModel;
}

export default function ArticleList({ basePath, list }: ArticleListProps) {
  return (
    <ul className="list">
      {list.articles?.map((item) => {
        return (
          <li className="listItem" key={item.id}>
            <Link href={`${basePath}/${item.id}`}>
              <article className="container">
                <h1 className="title">
                  <div className="titleSub">タイトル</div>
                  {item.title}
                </h1>
                <div className="date">投稿日: {item.date}</div>
              </article>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
