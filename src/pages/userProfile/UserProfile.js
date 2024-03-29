import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {
  const Token = sessionStorage.getItem('token')
  if (Token === null) window.location.href = '/log-in';
  const User = sessionStorage.getItem("user")
  // console.log(JSON.parse(User))
  const user = JSON.parse(User)
  const [order, setOrder] = useState([])
  const [cancelorder, setCancelorder] = useState([])
  const [Pendingorder, setPendingorder] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;

  // Calculate indexes for pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentPendingOrders = Pendingorder.slice(indexOfFirstOrder, indexOfLastOrder);
  const currentCancelledOrders = cancelorder.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(Pendingorder.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleData = async () => {
    try {
      const response = await axios.get("https://api.camrosteel.com/api/v1/my-order", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}` // Fix typo Bearear to Bearer
        }
      });
      // Handle the response data here
      console.log(response.data.data);
      const latestOrder = response.data.data;
      // console.log(latestOrder)
      const isOrderCancel = latestOrder && latestOrder.filter((order) => order.orderStatus === "Cancel");
      const isOrderPending = latestOrder && latestOrder.filter(order => order.orderStatus.startsWith("Order"))


      // console.log("isOrderCancel", isOrderCancel);
      setCancelorder(isOrderCancel)
      setPendingorder(isOrderPending)

      // console.log("isOrderPending", isOrderPending);

      // setaddress(formattedAddress)
      setOrder(latestOrder)
    } catch (error) {
      // console.error('Error fetching order data:', error);
    }
  };
  const MainAddress = order.reduce((accumulator, order) => {
    const address = order.address[0];
    accumulator.street = address.street;
    accumulator.state = address.state;
    accumulator.city = address.city;
    accumulator.pincode = address.pincode;
    return accumulator;
  }, {});

  // console.log(MainAddress);
  useEffect(() => {
    handleData()
  }, [Token])
  return (
    <>
      {Token ? (
        <section className='profile-page'>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-detail bg-rounded">
                  <div className="single">
                    <i class="fa-solid fa-circle-user"></i>
                    <p className='name'>{user.Name || "Login Now"}</p>
                  </div>
                  <div className="single">
                    <i class="fa-solid fa-envelope"></i>
                    <p>{user.Email || "Login Now"}</p>
                  </div>
                  <div className="single">
                    <i class="fa-solid fa-square-phone"></i>
                    <p>+91 {user.ContactNumber}</p>
                  </div>
                  <div className="single">
                    <i class="fa-solid fa-lock-open"></i>
                    <p>HARS0987</p>
                  </div>
                  <div className="single">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{MainAddress.street}, {MainAddress.city}, {MainAddress.state} - {MainAddress.pincode}</p>
                  </div>

                </div>
              </div>
              <div className="col-md-8">
                <div className="row bg-rounded">
                  <div className="col-12">

                    <div className="btns-tab-list">
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My Orders</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancelled orders</button>
                        </li>
                        {/* <li class="nav-item" role="presentation">
                   <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                 </li> */}
                      </ul>
                    </div>

                  </div>
                  <div className="col-12 mt-3 p-0">

                    <div className="max-table">
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                          {/* ---- My Order Table ---  */}
                          <table class="table text-center table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Product</th>
                                <th scope="col">Product Name</th>

                                <th scope="col">Address</th>
                                <th scope="col">Status</th>

                              </tr>
                            </thead>
                            <tbody>
                              {Pendingorder && Pendingorder.map((item, index) => (
                                <tr className='text-center' key={index}>
                                  <th scope="row" className='count'>{index + 1}</th>
                                  <td className='product-des'>
                                    {item.product && item.product.map((product, productIndex) => (
                                      <div key={productIndex}>
                                        <img src={product.image[0]} alt="product-image" loading='lazy' decoding='async' />

                                      </div>
                                    ))}
                                  </td>
                                  {item.product && item.product.map((products, nameIndex) => (
                                    <>

                                      <td key={nameIndex} className='address'> <p>{products.name}</p></td>
                                      <td className='address'> <p>{item.address[0].street}, {item.address[0].city}, {item.address[0].state} - {item.address[0].pincode}</p></td>

                                    </>
                                  ))}

                                  <td className='status'>
                                    <span className='pending'></span>
                                    {item.orderStatus}
                                  </td>

                                </tr>
                              ))}

                            </tbody>
                          </table>
                          <div className="pagination">
                            <ul className="pagination">
                              {pageNumbers.map((number) => (
                                <li key={number} className="page-item">
                                  <button onClick={() => paginate(number)} className="page-link  bg-red-600 text-white ">
                                    {number}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          {/* ---- My cancel Order Table ---  */}
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Product</th>
                                <th scope="col">Product Name</th>

                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cancelorder && cancelorder.map((item, index) => (
                                <tr className='text-center' key={index}>
                                  <th scope="row" className='count'>{index + 1}</th>
                                  <td className='product-des'>
                                    {item.product && item.product.map((product, productIndex) => (
                                      <div key={productIndex}>
                                        <img src={product.image[0]} alt="product-image" loading='lazy' decoding='async' />

                                      </div>
                                    ))}
                                  </td>
                                  {item.product && item.product.map((products, nameIndex) => (
                                    <>

                                      <td key={nameIndex} className='address'> <p>{products.name}</p></td>
                                      <td className='address'> <p>{item.address[0].street}, {item.address[0].city}, {item.address[0].state} - {item.address[0].pincode}</p></td>

                                    </>
                                  ))}

                                  <td className='status'>
                                    <span className='pending'></span>
                                    {item.orderStatus}
                                  </td>

                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="pagination">
                            <ul className="pagination">
                              {pageNumbers.map((number) => (
                                <li key={number} className="page-item">
                                  <button onClick={() => paginate(number)} className="page-link bg-red-600 text-white">
                                    {number}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                        {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>
      ) : (
        <p>Login</p>
      )}

    </>
  )
}

export default UserProfile