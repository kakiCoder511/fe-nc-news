import { useSearchParams } from "react-router-dom";


export default function SortBy( ){

const [searchParams, setSearchParams] = useSearchParams();

const sort_by = searchParams.get("sort_by") || "created_at"
const order =searchParams.get("order") ||"desc"

const handleSortChange =(e)=>{
    searchParams.set("sort_by",e.target.value)
    setSearchParams(searchParams)
}
const toggleOrder = () => {
  const newOrder = order === "asc" ? "desc" : "asc";
  const newParams = new URLSearchParams(searchParams); 
  newParams.set("order", newOrder);

  setSearchParams(newParams);
};

return(
    <section>
        <label htmlFor="sort-select">Sort By:</label>
        <select id="sort-se;ect" value={sort_by} onChange={handleSortChange}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value ="comment_count"> Comment Count</option>
        </select>
        <button onClick={toggleOrder}>
            Order :{ order ==="asc"?" Ascending":" Descending"}
        </button>
    </section>
)
}