import { useSearchParams } from "react-router";

function Products() {
  let [searchParams] = useSearchParams();

  return (
    <div>
      Buscaste el producto <strong>{searchParams.get("busqueda")}</strong>
    </div>
  )
}

export default Products;