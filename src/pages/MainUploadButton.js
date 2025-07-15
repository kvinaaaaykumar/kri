import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'
import { MdAdd } from 'react-icons/md';


const MainUploadButton = () => {
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
    <div className="flex bg-gray-100">
        <div className=' ml-6'>
            <h2 className='font-bold text-lg'></h2>
            <button  className='flex items-center bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition-all ' onClick={()=>setOpenUploadProduct(true)}><MdAdd className="mr-2 text-xl" />
                    Create Entry</button>
        </div>
        {/**upload prouct component */}
        {
          openUploadProduct && (
            <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
          )
        }
    </div>
  )
}

export default MainUploadButton