import { useParams } from "react-router-dom"

export default function ArticlePage(){
    const {article_id}=useParams()
    return <h2>You are viewing {article.id}</h2>
}
   
