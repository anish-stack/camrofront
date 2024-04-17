import React, { useEffect, useState } from 'react'
import './Shop.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Shop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const [productData, setProductData] = useState([])
  const [categories, setcategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 100, max: 10000 }); // Initial price range
  // const [bestsellersOnly, setBestsellersOnly] = useState(false);
  // const [topSellingOnly, setTopSellingOnly] = useState(false);
  // const [hotProductOnly, setHotProductOnly] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    bestsellersOnly: false,
    topSellingOnly: false,
    hotProductOnly: false
  });
  const handleFilterOptionChange = (option) => {
    setFilterOptions(prevOptions => ({
      bestsellersOnly: option === 'bestsellersOnly' ? !prevOptions.bestsellersOnly : false,
      topSellingOnly: option === 'topSellingOnly' ? !prevOptions.topSellingOnly : false,
      hotProductOnly: option === 'hotProductOnly' ? !prevOptions.hotProductOnly : false
    }));
  };
  const handleData = async () => {
    try {
      const response = await axios.get("https://api.camrosteel.com/api/v1/all-product");
      console.log(response.data.data);
      setProductData(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }
  const getAllCategories = async () => {
    try {
      const response = await axios.get("https://api.camrosteel.com/api/v1/getAllCategorey");
      console.log(response.data);
      setcategories(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleData()
    getAllCategories()
  }, [])
  const handlePriceChange = (e) => {
    setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
  }

  // const handleBestsellersToggle = () => {
  //   setBestsellersOnly(!bestsellersOnly);
  // };

  // const handleTopSellingToggle = () => {
  //   setTopSellingOnly(!topSellingOnly);
  // };

  // const handleHotProductToggle = () => {
  //   setHotProductOnly(!hotProductOnly);
  // };

  const filteredProducts = productData.filter(item => {
    // Filter by selected category
    if (selectedCategory && item.Category !== selectedCategory) {
      return false;
    }
    // Filter by price range
    if (item.price < priceRange.min || item.originalPrice > priceRange.max) {
      return false;
    }
    if (
      (!filterOptions.bestsellersOnly || item.property === "bestseller") &&
      (!filterOptions.topSellingOnly || item.property === "Top Selling") &&
      (!filterOptions.hotProductOnly || item.property === "Hot Product")
    ) {
      return true;
    }
    return false;
  });
  return (
    <>
      <section className="page-breadcrumb">
        <h2>{selectedCategory} Categories</h2>
        <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{selectedCategory} </li>
          </ol>
        </div>
      </section>
      <section className="container mt-5">

        <div className="row">
          <div className="col-md-2 shop-side-view">
            <div className="all-categories bg-rounded">
              <h5>CATEGORIES</h5>

              <ul>
                <li><Link to='' onClick={() => setSelectedCategory('')}>All Categories</Link></li>
                {categories && categories.map((catItem, i) => (
                  <li key={i}><Link to='' onClick={() => handleCategoryClick(catItem.category)}> <i className="fa-solid fa-arrows-turn-right"></i> {catItem.category}</Link></li>
                ))}
              </ul>

            </div>
            <div className="price-range bg-rounded">
              <h5>Price Range</h5>
              <input type="range" className="form-range" min="0" max="10000" name="min" value={priceRange.min} onChange={handlePriceChange} />
              <p>Min: ₹{priceRange.min}</p>
              <input type="range" className="form-range" min="0" max="10000" name="max" value={priceRange.max} onChange={handlePriceChange} />
              <p>Max: ₹{priceRange.max}</p>
            </div>

            <div className="filter-options bg-rounded">
              <h5>Filter Options</h5>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bestsellersCheckbox" checked={filterOptions.bestsellersOnly} onChange={() => handleFilterOptionChange('bestsellersOnly')} />
                <label className="form-check-label" htmlFor="bestsellersCheckbox">
                  Show Bestsellers Only
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="topSellingCheckbox" checked={filterOptions.topSellingOnly} onChange={() => handleFilterOptionChange('topSellingOnly')} />
                <label className="form-check-label" htmlFor="topSellingCheckbox">
                  Show Top Selling Only
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="hotProductCheckbox" checked={filterOptions.hotProductOnly} onChange={() => handleFilterOptionChange('hotProductOnly')} />
                <label className="form-check-label" htmlFor="hotProductCheckbox">
                  Show Hot Product Only
                </label>
              </div>
            </div>
            {/* <div className="availability bg-rounded">
              <h5>Availability</h5>

              <div className="checkbox">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label" for="gridCheck1">
                    Avilable in Stock
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck2" />
                  <label class="form-check-label" for="gridCheck2">
                    Out Of Stock
                  </label>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-md-9">
            <div className="product-lists main-product shop-page">
              {filteredProducts && filteredProducts.map((item, index) => (
                <Link to={`/Products/${item.productName}/${item._id}`} className="product" key={index}>
                  <div className="img">

                    <img loading="lazy" decoding="async" src={item.images[0].img} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} className="front-img" alt="" />
                    <img loading="lazy" decoding="async" src={item.images[1].img} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} className="back-img" alt="" />
                    <span className={`property ${item.property === "Top Selling" ? 'topSelling' : ''} ${item.property === "Trending" ? 'topSelling' : ''} ${item.property === "New Arrival" ? 'bestseller' : ''} ${item.property === "Hot Product" ? 'hotProduct' : ''} ${item.property === "" ? 'p-0' : ''}`}>{item.property}</span>

                  </div>
                  <div className="product-name">{item.productName}</div>
                  <div className="sizes" key={index}>
                    {item.sizes.map((size, index) => (
                      <small>{size.size}</small>

                    ))}
                  </div>
                  <p className='mt-[7px] w-full truncate whitespace-nowrap text-black text-start text-sm'>{item.Desc || "Best for Indian, Chinese dishes | Daily use"}</p>

                  <div className="mrp">

                    {item.sizes.length > 0 && (
                      <div className="mrp">
                        <div className="original-price">₹{item.sizes[0].discoPrice}</div>
                        <div className="cut-price">₹{item.sizes[0].originalPrice}</div>
                      </div>
                    )}
                  </div>
                  <div className="grid-btn">
                    <a href="javascript:void(0)" className="addToCart">Add to Cart <i className="fa-solid fa-cart-shopping"></i></a>
                    {/* <Link to='' className="Wishlist"><i className="fa-regular fa-heart"></i></Link> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop