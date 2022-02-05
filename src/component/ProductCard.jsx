import React from "react";
import "./ProductCard.css";
function ProductCard({ alldetails }) {
  return (
    <>
      <div className="productCard">
        <div className="card shadow-md compact  side  myspecial">
          <div className="flex-row items-center space-x-7 card-body">
            <div>
              <div className="avatar">
                <div className=" shadow w-14 h-14">
                  <img src={alldetails.image} alt="Profile" />
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: "5px" }}>{alldetails.product_name}</h3>
              <h4 style={{ marginBottom: "5px" }}>{alldetails.brand_name}</h4>
              <h3>$ {alldetails.price}</h3>
            </div>
          </div>
          <div className="flex-row items-center space-x-10 card-body flow">
            <p className="size">{alldetails.address.state}</p>
            <p className="size">Date : {alldetails.date.split("T")[0]}</p>
          </div>
          <div className="flex-row items-center space-x-10 card-body">
            <p className="size">{alldetails.discription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
