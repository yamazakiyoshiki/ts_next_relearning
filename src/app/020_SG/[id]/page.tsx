import { paths } from "../paths";

export default function Page({ params }: { params: { id: string } }) {
  const date: Date = new Date();
  return (
    <h3>
      このページは{params.id}です。{date.toJSON()}
    </h3>
  );
}

export async function generateStaticParams() {
  return paths;
}
