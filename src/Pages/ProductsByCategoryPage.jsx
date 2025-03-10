import { CategorySection } from "../components/CategorySection/CategorySection"
import { useParams } from "react-router-dom"

export const ProductsByCategoryPage = () => {

    const { category } = useParams();

  return (
    <CategorySection category={category} limit={0}/>
  )
}
