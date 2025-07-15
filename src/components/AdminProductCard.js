import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';

const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleString('en-IN', options).replace(',', '');
};

const AdminProductCard = ({ data, fetchdata, serialNumber }) => {
    const [editProduct, setEditProduct] = useState(false);
    const [viewProduct, setViewProduct] = useState(false);

    return (
        <div className='bg-white shadow-md rounded-md overflow-hidden'>
            <table className="w-full border-collapse border border-gray-300 text-left">
                <thead className='bg-gray-100'>
                    <tr>
                        <th className="py-3 px-4 border border-gray-300">Sr.</th>
                        <th className="py-3 px-4 border border-gray-300">Name</th>
                        <th className="py-3 px-4 border border-gray-300">Purpose</th>
                        <th className="py-3 px-4 border border-gray-300">Booking Date</th>
                        <th className="py-3 px-4 border border-gray-300">Created By</th>
                        <th className="py-3 px-4 border border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-50'>
                        <td className="py-3 px-4 border border-gray-300">{serialNumber}</td>
                        <td className="py-3 px-4 border border-gray-300">{data.productName}</td>
                        <td className="py-3 px-4 border border-gray-300">{data.category}</td>
                        <td className="py-3 px-4 border border-gray-300">{formatDateTime(data.date)}</td>
                        <td className="py-3 px-4 border border-gray-300">{data.productName} created on {formatDateTime(data.createdAt)}</td>
                        <td className="py-3 px-4 border border-gray-300 flex gap-2">
                            <div 
                                className='p-2 bg-blue-100 hover:bg-blue-600 rounded-full hover:text-white cursor-pointer' 
                                onClick={() => setViewProduct(true)}
                            >
                                <AiOutlineEye />
                            </div>
                            <div 
                                className='p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' 
                                onClick={() => setEditProduct(true)}
                            >
                                <MdModeEditOutline />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Edit Product Modal */}
            {editProduct && (
                <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
            )}

            {/* View Product Modal */}
            {viewProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Product Details</h2>
                        <p><strong>Name:</strong> {data.productName}</p>
                        <p><strong>Gender:</strong> {data.brandName}</p>
                        <p><strong>Mobile No:</strong> {data.price}</p>
                        <p><strong>Address:</strong> {data.brandName2}</p>
                        <p><strong>Purpose:</strong> {data.category}</p>
                        <p><strong>Booking Date:</strong> {formatDateTime(data.date)}</p>
                        <p><strong>Other:</strong> {data.sellingPrice}</p>
                        <p><strong>Created By:</strong> {data.productName} created on {formatDateTime(data.createdAt)}</p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setViewProduct(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProductCard;
