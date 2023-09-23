import { useState } from "react";

function Form(props){
   const [product, setproduct]=useState(props.data);

   let changeFormData = (event)=>{
      const {name , value} = event.target;
      setproduct({...product,[name]:value})
   }

return(
    <div className="form-overlay">
      <form>
        <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control m-1" value={product.name} onChange={changeFormData} name="name" placeholder="Enter Name of Product"/>
        </div>
        <div className="form-group">
            <label>price:</label>
            <input type="text" name="price"className="form-control m-1" onChange={changeFormData} value={product.price} placeholder="Enter Price"/>
        </div>
        <div className="form-group">
            <label>Category:</label>
          <select className="form-control m-1" value={product.category} onChange={changeFormData} name="category">
            <option value={'-1'}></option>
            <option value={'mobile'}>Mobile</option>
            <option value={'laptop'}>Laptop</option>
          </select>
        </div>

        <button className="btn btn-primary float-end" onClick={(e)=>{
            e.preventDefault();
            props.add(product);
        }}>Add</button>
        <button className="btn btn-danger float-end" onClick={(e)=>{
            e.preventDefault();
            props.close()
        }}>Cancel</button>
      </form>
    </div>
)
}

export default Form;