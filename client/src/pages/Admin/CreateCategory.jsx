
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import axios from "axios";
import "../../css/CreateCategory.css"
import Layout from "../../components/Layout"
import { Modal } from 'antd';
import MainLayout from '../../components/MainLayout';
const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState(" ");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/category/create-category', { name });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }



  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/category/get-all-category');
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong getting the category');
    }
  }


  useEffect(() => {
    getAllCategory();
    //eslint-disable-next-line
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/api/category/update-category/${selected._id}`,
        { name: updatedName })
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        updatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
        getAllCategory();
      }
    } catch (error) {
      toast.error("somethin wrong");
      getAllCategory();
    }
  }

  const handleDelete = async (pid) => {

    try {
      const { data } = await axios.delete(`/api/category/delete-category/${pid}`);
      if (data?.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
        getAllCategory();
      }

    } catch (error) {
      console.log(error)
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
      <div className="main-display-container">
      <div>
        <h1 className='category-header'>Manage Category</h1>
        <div className="p-3 w-40">
          <form >
            <div className="mb-3">
              <input type="text" className="form-control"
                placeholder='Enter new Category' value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button type='submit' className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
        <div className='w-30'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((c) => (
                <>
                  <tr>
                    <td key={c._id}>{c.name}</td>
                    <td>
                      <button type="primary" className='btn btn-primary' onClick={() => {
                        setVisible(true);
                        setSelected(c)
                      }} style={{marginRight:"2rem"}}>
                        Edit
                      </button>

                      <button type="primary" className='btn btn-danger' onClick={() => { handleDelete(c._id) }} >Delete</button>

                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>

          <form >
            <div className="mb-3">
              <input type="text" className="form-control"
                placeholder='Enter new Category' value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>
            <button type="primary" className='btn btn-primary' onClick={handleUpdate}>Submit</button>
          </form>
        </Modal>
      </div>
      </div>
      </div>
    </div>
   </div>

    </Layout>
  )
}

export default CreateCategory
