import {getConnection} from "./../database/database.js";


const getmaterial= async(req,res)=>{
 try{
    const connection=await getConnection();
    const result=await connection.query("SELECT id,nombre,descripcion,cantidad FROM material");
    res.json(result);
 }catch(error){
    res.status(500);
    res.send(error.message);
 }
 };

 const addmaterial= async(req,res)=>{
    try{
       const {nombre,descripcion,cantidad}=req.body;
       const material={nombre,descripcion,cantidad};
       const connection=await getConnection();
       const result=await connection.query("INSERT INTO material SET ?",material);
res.json("agregar material");
    }catch(error){
       res.status(500);
       res.send(error.message);
    }
    };

export const methods={
    getmaterial,
    addmaterial
}