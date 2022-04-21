import React from "react";

function Product() {
  return (
    <div className="products">
      <div className="product-image">
        <img
          src="illustration-stay-productive.png"
          className="productImage"
          alt="illustration-stay-productive"
        />
      </div>
      <div className="product-info">
        <h1>
          Stay productive,
          <br />
          wherever you are
        </h1>
        <p className="product-paragraph">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleague
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className="product-anchor">
          See how Fylo works
        </a>
      </div>
    </div>
  );
}

export default Product;
