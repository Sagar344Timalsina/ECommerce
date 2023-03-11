import React,{useState, useEffect} from 'react'
import toast from "react-hot-toast";
import axios from "axios";
import { Select,Button } from 'antd';
import Layout from "../../components/Layout";
import MainLayout from '../../components/MainLayout';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [categories, setCategories]=useState([])
    const [description,setDescription]= useState("")
    const [category,setCategory]= useState("")
    const [stock,setStock]= useState("")
    const [price,setPrice]= useState("")
    const [image,setImage]= useState("")
    // const [category,setcategory]= useState("")
    const [ratings,setRatings]= useState("")
    const [reviews,setReviews]= useState("")
    const [shipping,setShipping]= useState("")

      //get all category
  const getAllCategory=async()=>{
    try {
      const {data}= await axios.get('/api/category/get-all-category');
     if(data?.success){
      setCategories(data?.category);
     }
    } catch (error) { 
      console.log(error)
      toast.error('Something went wrong getting the category');
    }
  }

  useEffect(()=>{
    getAllCategory();
    //eslint-disable-next-line
  },[])



//craete product hadneling

const handelCreate= async (e) =>{
  e.preventDefault()
  try {
    const productData=new FormData()
    productData.append("title", title)
    productData.append("description", description)
    productData.append("price", price)
    productData.append("stock", stock)
    productData.append("image", image)
    productData.append("category", category)
    const{data}= axios.post('/api/product/create-product',productData);
    if(data?.success){
      toast.error(data?.message);
    }else{
      toast.success("Product created succesfully");
      // navigate('/admin/dashboard/products');
    }
  } catch (error) {
    console.log(error);
  }
  }
 
  return (
    <Layout>
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-3">
        <MainLayout/>
      </div>
      <div className="col-md-9">
        
      <div className="container-fluid">
      <div className="createAll">
    <h1>Create Products</h1>
    <div className="createProduct m-1 w-75" >
      <Select bordered={false} placeholder="Select a category" size="large"
      showSearch className="form-select mb-3" onChange={(value)=>{setCategory(value)}}
      >
        {categories?.map((c)=>(
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
        
      </Select>

      <div className="mb-3 fileUpload">
        <label className='btn btn-outline-secondary col-md-12'>
          {image ? image.name : "Upload image"} 
        <input type="file" name="image" accept='image/*'
        onChange={(e)=> setImage(e.target.files[0])}
        hidden
        />  
        </label>
      </div>
      <div className="mb-3">
        {image && (
          <div className='text-center'>
            <img src={URL.createObjectURL(image)} alt="Product Image" height={'200px'} 
            className="img img-responsive"
            />
            </div>
        )}
      </div>
        <div className="mb-4">
          <input type="text" value={title} placeholder="Write a name"
          className='form-control'
          onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea type="text" value={description} placeholder="Write discription"
          className='form-control'
          onChange={(e)=> setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input type="number" value={price} placeholder="Price"
          className='form-control'
          onChange={(e)=> setPrice(e.target.value)}
          />
          </div>
        <div className="mb-4">
          <input type="number" value={stock} placeholder="Stock"
          className='form-control'
          onChange={(e)=> setStock(e.target.value)}
          />
        
        </div>
        
        {/* <div className="mb-4">
          <input type="text" value={reviews} placeholder="Reviews"
          className='form-control'
          onChange={(e)=> setReviews(e.target.value)}
          />
          
        </div>

        <div className="mb-4">
          <input type="text" value={ratings} placeholder="Ratings"
          className='form-control'
          onChange={(e)=> setRatings(e.target.value)}
          />
          
        </div> */}
        
        <div className="mb-3">
          <button className='productCreate' onClick={handelCreate}>Create Product</button>
        </div>
    </div>
    </div>
      </div>

        </div></div></div>
      

    

  </Layout>
  )

}





// }

export default CreateProduct