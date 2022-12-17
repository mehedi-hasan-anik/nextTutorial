import { useRouter } from "next/router";
import React from "react";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div>
      <h1>product details{productId}</h1>
    </div>
  );
}

export default ProductDetails;
