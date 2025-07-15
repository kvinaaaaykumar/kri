import React, { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import moment from 'moment';

const AdminProductList = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 border-b">
            <th className="py-3 px-4">Sr. No</th>
            <th className="py-3 px-4">Product Name</th>
            <th className="py-3 px-4">Brand</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Created Date</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={product._id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{product.productName}</td>
              <td className="py-3 px-4">{product.brandName}</td>
              <td className="py-3 px-4">{product.category}</td>
              <td className="py-3 px-4">{displayINRCurrency(product.sellingPrice)}</td>
              <td className="py-3 px-4">
                {moment(product.createdAt).format('LL')}
              </td>
              <td className="py-3 px-4">
                <div
                  className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
                  onClick={() => {
                    setEditProduct(true);
                    setEditIndex(index);
                  }}
                >
                  <MdModeEditOutline />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Product Modal */}
      {editProduct && editIndex !== null && (
        <AdminEditProduct
          productData={data[editIndex]}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductList;
