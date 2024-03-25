import { useState, useEffect } from "react";
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("uFetching Products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList {category}</div>;
};

export default ProductList;
