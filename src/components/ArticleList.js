import Article from "./Article"

function ArticleList({posts}) {
  const Articles = posts.map((article)=> {
    return <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
        minutes={article.minutes}
    />
  })
  return (
      <main>
        {Articles}
      </main>
  )
}

export default ArticleList