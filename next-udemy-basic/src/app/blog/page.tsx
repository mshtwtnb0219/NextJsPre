import type { Metadata } from "next";
// アプリ全体に影響する
export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "(｀･ω･´)(｀･ω･´)(｀･ω･´)(｀･ω･´)(｀･ω･´)(｀･ω･´)(｀･ω･´)(｀･ω･´)(｀･ω･´)",
};

// ダミーデータ
const articles = [
    { id: 1, title: "タイトル" },
    { id: 2, title: "タイトル" }
]

// 3秒待機
async function fetchArticles() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error('エラーが発生')
    return articles;
}

export default async function BlogPage() {

    const articles = await fetchArticles()
    return (
        <div>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        title: {article.title} </li>
                ))}
            </ul>
        </div>
    )
}
