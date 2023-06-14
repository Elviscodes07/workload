import React, { useEffect, useState } from "react";

import Axios from "axios";
import { Navbar } from "./navbar";

export const Store = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const result = await Axios.get("https://fakestoreapi.com/products");
      setItems(result.data);
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <Navbar></Navbar>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center ",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h2>Our Store</h2>

          <div className="d-flex flex-wrap justify-content-around gap-5">
            {items.map((item) => {
              return (
                <div>
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src={item.image}
                      class="card-img-top"
                      alt=".    .."
                      style={{ height: "170px", objectFit: "contain" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">Price is <span className="text-danger">${item.price}</span></h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};