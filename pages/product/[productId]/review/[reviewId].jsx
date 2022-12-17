import { useRouter } from "next/router";
import React from "react";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      Review{reviewId} and product{productId}
    </div>
  );
}

export default Review;
