import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"
export default function ArticleCard({article}){
const navigate = useNavigate()

return (

    <li onClick ={()=>{navigate(`/articles/${article.article_id}`)}}
    style={{cursor:"pointer"}}
    >
      <h3>{article.title}</h3>
      <p className="topic">Topic: {article.topic}</p>
      <p>{article.body}</p>
      <p>
        By {article.author} | Votes: {article.votes} | Dates:  {dayjs(article.created_at).format(" DD MMM YYYY ddd")}|comments:{" "}
        {article.comment_count}| 
      </p>
    </li>

)



}
