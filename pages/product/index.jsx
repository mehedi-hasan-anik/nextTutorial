import Link from "next/Link";
import React from "react";

function Product() {
  return (
    <div>
      <h1>
        <Link href="product/1">product 1</Link>
      </h1>
      <h1>
        <Link href="product/2">product 2</Link>
      </h1>
      <h1>
        <Link href="product/3" replace>
          product 3
        </Link>
      </h1>
    </div>
  );
}

export default Product;
