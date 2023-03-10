import React from 'react'
import { Button, Input } from 'antd';
const CategoryForm = ({handleSubmit, value, setValue}) => {
  return (
    <>

<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <Input type="text" className="form-control" 
    placeholder='Enter new Category' value={value}
    onChange={(e)=> setValue(e.target.value)}
     />
  </div>
  <Button type="primary"onClick={()=>handleSubmit}>Submit</Button>
</form>
 </>
  )
}

export default CategoryForm