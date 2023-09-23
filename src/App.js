import Table from "./Table";
import Form from "./Form";
import { deleteProduct, getProductsData,postData ,editData} from "./api";
import { useEffect, useState } from "react";


function App(){
  const [products, setProducts]=useState([])
  const [openForm, setOpenForm]=useState(false)
  const [edit , setEdit]=useState(false)
  const [intialForm, setForm]=useState({
    name:'', price:'', category:''
  })
  useEffect(()=>{
    getProducts()
  },[])

  let getProducts = async ()=>{
    let res = await getProductsData();
    setProducts(res.data)
  }

  let deleteData = async (id)=>{
   await deleteProduct(id);
    getProducts();
  }

  let showForm = ()=>{
    setOpenForm(true)
    setForm({name:'', price:'', category:''})
  }

  let closeForm= ()=>{
    setOpenForm(false)
  }

  let addProduct = async(product)=>{
    const data={
      name:product.name,
      price:product.price,
      category:product.category
    }
    if(edit)
      await editData(product.id,data)
    else
    await postData(data);
    getProducts();
    setOpenForm(false)
  }

  let editProduct = async(data)=>{
    setEdit(true)
    setForm(data);  
    setOpenForm(true)
  }

  return (
    <div className="wrapper m-5 w-50">
      <h2 className="text-primary">Curd Operations</h2>
      <button className="btn btn-primary" onClick={()=>showForm()}>Add Product</button>
      <Table products={products} delete ={deleteData} edit={editProduct}/>
      {openForm && <Form close = {closeForm} data={intialForm} add={addProduct} />}
    </div>
  )
}

export default App;