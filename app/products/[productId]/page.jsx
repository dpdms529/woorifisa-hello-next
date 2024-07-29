import { notFound } from "next/navigation";

export default function ProductDetail({ params }) {
  if (params.productId > 20) {
    notFound();
  }
  return <div>Product {params.productId} details</div>;
}
