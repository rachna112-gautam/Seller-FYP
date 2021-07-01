import React from 'react'

export default function main(props) {
  return (
    <div className="">
      <div className="container main">
        <h2>Decentralised Marketplace</h2>
        <p className="tag-line">
          Welcome to the virtual world’s one-stop-shop for the very best
          digital assets.
        </p>
        <button
          type="button"
          className="btn browsing"
          onClick={() => {
            props.register();
          }}
        >
          <a href="/register" className="text-white">Register As Seller</a>
        </button>
        {/* <button type="button" className="btn browsing">
            Register As Buyer
          </button> */}
      </div>
    </div>
  );
}
