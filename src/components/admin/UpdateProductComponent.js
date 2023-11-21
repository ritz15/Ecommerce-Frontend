import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom' 
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../../components/Footer'
import ProductService from '../../services/ProductService'
// import UserService from "../../services/UserService";

const UpdateProductComponent = () => {

    //  const [cartId, setCartId] = useState('')
    const [productType, setProductType] = useState('')
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState('')
    const [review, setReview] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [specification, setSpecification] = useState('')
    const navigate = useNavigate();
     const {productId}=useParams();

    const updateProduct=(e)=>{
    e.preventDefault();
    const product={"productType":productType, "productName": productName, "category": category, "rating": rating,
    "review": review,  "image":image, "price": price, "description": description,
     "specification":specification}
   
        ProductService.updateProduct(product,productId).then((response)=>{
            console.log(response.data)
            navigate('/admin/products');

        }).catch(error=>{
            console.log(error);
        })
    
       toast.success("Updated Successfully", {
          position: "top-center",
        });
        window.location.reload(false);
    }
 

useEffect(() => {
    ProductService.getProductById(productId).then((response)=>{
        // setCartId(response.data.cartId)
        setProductType(response.data.productType)
        setProductName(response.data.productName)
        setCategory(response.data.category)
        setRating(response.data.rating)
        setReview(response.data.review)
        setImage(response.data.image)
        setPrice(response.data.price)
        setDescription(response.data.description)
        setSpecification(response.data.specification)
        
    }).catch(error=>{
        console.log(error)
    })
  
}, [])
// const title=()=>{
//     if(cartId){
//         return <h2 className='text-center'>Update Cart</h2>
//     }
//     else{
//         return <h2 className='text-center'>Add Cart</h2>
//     }
// }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>Update Product</h2>
                    <div className='card-body'>
                        <form>
                       
                            <div class = "form-row">
                            <div className='form-group md-6 '>
                                <label className='form-label'>productType</label>
                                <input type="text"
                                placeholder='Enter ProductType'
                                name='productType'
                                className='form-control'
                                value={productType}
                                onChange={(e)=>setProductType(e.target.value)}>
                                </input>
                            </div>
                            
                            <div className='form-group md-6 '>
                                <label className='form-label'>productName</label>
                                <input type="text"
                                placeholder='Enter ProductName'
                                name='productName'
                                className='form-control'
                                value={productName}
                                onChange={(e)=>setProductName(e.target.value)}>
                                </input>
                            </div>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>category</label>
                                <input type="text"
                                placeholder='Enter category'
                                name='category'
                                className='form-control'
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>rating</label>
                                <input type="number"
                                placeholder='Enter Rating'
                                name='rating'
                                className='form-control'
                                value={rating}
                                onChange={(e)=>setRating(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>review</label>
                                <input type="text"
                                placeholder='Enter Review'
                                name='review'
                                className='form-control'
                                value={review}
                                onChange={(e)=>setReview(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>image</label>
                                <input type="text"
                                placeholder='Enter Image'
                                name='image'
                                className='form-control'
                                value={image}
                                onChange={(e)=>setImage(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>price</label>
                                <input type="number"
                                placeholder='Enter price'
                                name='price'
                                className='form-control'
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>description</label>
                                <input type="text"
                                placeholder='Enter description'
                                name='description'
                                className='form-control'
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2 '>
                                <label className='form-label'>specification</label>
                                <input type="text"
                                placeholder='Enter specification'
                                name='specification'
                                className='form-control'
                                value={specification}
                                onChange={(e)=>setSpecification(e.target.value)}>
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e)=>updateProduct(e)}>Submit</button>
                            <Link to="/admin/products" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    {/* <Footer/> */}
    </div>
    
  )
}

export default UpdateProductComponent