import { useParams } from "react-router";

function Product() {

  let { id } = useParams();

  return (
    <div>Producto con id: {id}</div>
  )
}

export default Product;