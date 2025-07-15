import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])
  
  return (
    <div>
        

        {/**all product */}
        <div className='flex items-center flex-wrap gap-5 py-4 pl-6 pt-6'>
          {
            allProduct.map((product,index)=>{
              return(
                <AdminProductCard data={product} key={index+"allProduct"} serialNumber={index + 1} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
        </div>





       
      

    </div>
  )
}

export default AllProducts