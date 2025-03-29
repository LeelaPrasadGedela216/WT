import React, { useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
const BestSeller = () => {

  const products=useSelector(store=>store.home.products);
      const [bestseller, setBestseller] = useState([]);
      console.log("products:",products)
      useEffect(() => {
        const best=products.filter((item)=>item.bestseller)
        setBestseller(best.slice(0, 5));
       
      }, []);

    if (bestseller.length === 0) {
        return <div>Loading...</div>; // or return null;
      }
  return (
    <div >
      <Title text1={"BEST"} text2={"SELLER"} className="my-4" />
      <p className="text-gray-800 my-4 mx-auto w-3/4 text-xs sm:text-sm md:text-base ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.{" "}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4 my-8 mb-20">
        {bestseller.map((item, index) => (
          <ProductItem
            key={index}
            _id={item._id}
            name={item.name}
            price={item.price}
           image={item.image}
          />
        ))}
      </div>
    </div>
  );
  
}

export default BestSeller
