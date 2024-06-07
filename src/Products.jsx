import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';

const Product = () => {
    const cardItem = (item) => {
        return (
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-5" key={item.id}>
                <img src={item.img} className="w-full" alt={item.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base">${item.price}</p>
                </div>
                <div className="px-6 py-4">
                    <NavLink to={`/products/${item.id}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Product</h1>
                <hr className="my-5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {DATA.map(cardItem)}
            </div>
        </div>
    );
}

export default Product;
