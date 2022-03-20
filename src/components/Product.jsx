import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../app/itemSlice";

const Product = () => {
  const itemsArray = useSelector((state) => state);
  const dispatch = useDispatch();
    const [product, setProduct] = useState(null)
    const {id}= useParams();
    useEffect(() => {
      const abortion = new AbortController
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=> setProduct(response.data))
       abortion.abort()
    }, [id, product])
    if( product === null){
        return( 
        <h1 className="text-center align-middle">....Loading....</h1>
        )
    }
    

    return (
      <section className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            height="300em"
            className="m-5 w-50"
          />
        </div>

        <div className="col-md-7">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <h4>
            {product.rating.rate}
            <span>
              {product.rating.rate <= 1 ? (
                <AiFillStar className="text-warning"></AiFillStar>
              ) : product.rating.rate <= 2 ? (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              ) : product.rating.rate <= 3 ? (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              ) : product.rating.rate <= 4 ? (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              ) : (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              )}
            </span>
          </h4>
          <h3>{product.category}</h3>
          <button className="btn btn-dark m-2"
          onClick={()=>{
             dispatch(add(product))}}
          >Add to cart</button>
          <a href="tel:07038655608">
            <button className="btn btn-dark m-2">
              Call to Order <BsTelephoneFill></BsTelephoneFill>
            </button>
          </a>
        </div>
      </section>
    );
}
 
export default Product;