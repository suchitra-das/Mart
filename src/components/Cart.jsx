import React, { useContext, useEffect, useState } from 'react';
import { AppContextNew } from './App';
export default function Cartpage() {
  const { cart, setCart, products, inc, dec } = useContext(AppContextNew);
  const [orderval, setOrderVal] = useState(0);
  useEffect(() => {
    setOrderVal(
      products.reduce(
        (total, product) => total + (cart[product.id] ? product.price * cart[product.id] : 0),
        0
      )
    );
  }, [cart, products]);

  const removeFromCart = (product) => {
    const updatedCart = { ...cart };
    delete updatedCart[product.id];
    setCart(updatedCart);
  };

  return (
    <div className="container " style={{marginTop:'100px'}}>
      <div className="row gy-4">
        <div className="col-12 col-lg-8">
          {Object.keys(cart).length === 0 ? (
            <h1>No items in cart</h1>
          ) : (
            products.map((product, index) =>
              cart[product.id] ? (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center p-3 border rounded mb-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={product.imgUrl}
                      alt={product.productName}
                      className="img-fluid me-3"
                      style={{ height: '100px', width: '100px', objectFit: 'contain' }}
                    />
                    <div>
                      <h5>{product.productName}</h5>
                      <p className="mb-0 text-muted">
                        ${product.price.toFixed(2)} * {cart[product.id]}{' '}
                        <span>
                          <b> ${product.price.toFixed(2) * cart[product.id]}</b>
                        </span>
                      </p>
                    </div>
                  </div>
                  <i
                      className="fas fa-times text-danger me-3"
                      onClick={() => removeFromCart(product)} 
                    ></i>
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => dec(product)}
                      className="btn btn-dark btn-sm me-1"
                      
                    >
                      -
                    </button>
                    <span className="mx-2">{cart[product.id]}</span>
                    <button onClick={() => inc(product)} className="btn btn-dark btn-sm">
                      +
                    </button>
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
        <div className="col-12 col-lg-4">
          <div className="border p-3 rounded">
            <h3>Cart Summary</h3>
            <hr />
            <h4>Total Price:</h4>
            <h3>${orderval.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
