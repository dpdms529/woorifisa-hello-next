import ProductDetail from "./[productId]/page";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <ProductDetail params={{ productId: 1 }} />
      </h2>
      <h2>
        <ProductDetail params={{ productId: 2 }} />
      </h2>
      <h2>
        <ProductDetail params={{ productId: 3 }} />
      </h2>
    </div>
  );
};

export default ProductList;
