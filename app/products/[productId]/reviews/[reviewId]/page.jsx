import { notFound } from "next/navigation";
import React from "react";

const Review = ({ params }) => {
  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default Review;
