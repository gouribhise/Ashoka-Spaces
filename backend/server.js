import express from "express"
import data from "./data.js";
import cors from "cors"
const app=express()
app.use(cors({
  origin:'http://localhost:5173'
}))
app.use(express.json())

//test route
app.get("/",(req,res)=>{
    res.send("Server is running!")
})

app.get("/getAll",(req,res)=>{
res.json({
    success:true,
    total:data.length,
    data:data
})
})

//by id
app.get("/property/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const property=data.find(item=>item.id===id);
    if(!property){
        return res.status(400).json({
            success:false,
            message:"Property not found!"
        })
    }
    res.json({
        success:true,
        data:property
    })
})

 // 👉 Dynamic filter route
app.get("/properties", (req, res) => {
    let results = data;
  
    const { type, bedrooms, city, price, purpose, furnished } = req.query;
  
    // Filter by type
    if (type) {
      results = results.filter(item => item.type.toLowerCase() === type.toLowerCase());
    }
  
    // Filter by bedrooms
    if (bedrooms) {
      results = results.filter(item => item.bedrooms == bedrooms);
    }
  
    // Filter by city
    if (city) {
      results = results.filter(item => item.city.toLowerCase() === city.toLowerCase());
    }
  
    // Filter by price (max price)
    if (price) {
      results = results.filter(item => item.price <= Number(price));
    }
  
    // Filter by purpose (rent / sale)
    if (purpose) {
      results = results.filter(item => item.purpose.toLowerCase() === purpose.toLowerCase());
    }
  
    // Filter by furnished type
    if (furnished) {
      results = results.filter(item => item.furnished.toLowerCase() === furnished.toLowerCase());
    }
  
    return res.json({
      success: true,
      total: results.length,
      data: results
    });
  });
const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})