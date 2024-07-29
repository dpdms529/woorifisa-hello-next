import Link from "next/link";

const ProductList = () => {
  const productsList = [3, 4];
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      {productsList.map((productId) => (
        <h2>
          <Link href={`/products/{productId}`} key={productId}>
            Product {productId}
          </Link>
        </h2>
      ))}
    </div>
  );
};

export default ProductList;
