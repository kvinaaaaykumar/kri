import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";

const MainEditButton = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <>
      <div
        onClick={() => setEditProduct(true)}
      >
        <MdModeEditOutline />
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </>
  );
};

export default MainEditButton;
