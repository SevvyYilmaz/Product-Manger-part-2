import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductList = ({ product, setProduct }) => {
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setProduct]);

    return (
        <div>
            {product.map((product, index) => {
                return (
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/${product._id}`}>
                            {" "}
                            {product.title}'s Page!{" "}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
