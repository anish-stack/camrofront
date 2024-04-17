import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Category = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
    const [categ,setCateg] = useState([])
    const handleCategories= async()=>{
        try {

            const response = await axios.get("https://api.camrosteel.com/api/v1/getAllCategorey")
            console.log(response.data);
            setCateg(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleCategories()
    },[])
  return (
    <>
        <section className="page-breadcrumb">
            <div className="row">
                <div className="col-12">
                    <h2>Our Categories</h2>
                    <div aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Our Categories</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section className='product-categories-page mt-5'>
            <div className="container sm:w-[100%]">
                <div className="row">
                    <div className="grid-cate">
                        {categ.map((item,index)=>(
                            <Link to={`/ProductBy-Category/${item.category}`} className="single" key={index}>
                                <img src={item.image} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} alt="non-stick-aluminium" />
                                <h4>{item.category}</h4>
                                <span className='avail'>{item.numberOfProducts} Items</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Category