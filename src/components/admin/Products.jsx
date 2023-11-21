import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Products = () => {
  const navigate = useNavigate();

  //   const getAllProducts=()=>{
  //   ProductService.getAllProducts()
  //   .then((response)=>{
  //     setProduct(response.data);
  //     console.log(response.data);
    
  //     }).catch((error) =>{
  //       console.log(error);
  //     });

  // };

  return (
    <>
      <AdminHeaders>
        <h2>Products</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
        {/* <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton> */}
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
