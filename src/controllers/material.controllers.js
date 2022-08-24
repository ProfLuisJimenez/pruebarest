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

 const getmat= async(req,res)=>{
   try{
      console.log(req.params);
      const {id}=req.params;
      const connection=await getConnection();
      const result=await connection.query("SELECT id,nombre,descripcion,cantidad FROM material where id= ?", id);
      res.json(result);
   }catch(error){
      res.status(500);
      res.send(error.message);
   }
   };

 const addmaterial= async(req,res)=>{
    try{
       const {nombre,descripcion,cantidad}=req.body;
       if(nombre == undefined || descripcion == undefined || cantidad == undefined){
         res.status(400).json({message:"Por favor llena todos los campos"});
       }
       const material={nombre,descripcion,cantidad};
       const connection=await getConnection();
       const result=await connection.query("INSERT INTO material SET ?",material);
res.json("agregar material");
    }catch(error){
       res.status(500);
       res.send(error.message);
    }
    };

    const delmaterial= async(req,res)=>{
      try{
         const {id}=req.params;
         const connection=await getConnection();
         const result=await connection.query("DELETE FROM material WHERE id =?", id);
         res.json(result);
      }catch(error){
         res.status(500);
         res.send(error.message);
      }
      };

      const updatematerial= async(req,res)=>{
         try{
            const {id}=req.params;
            const {nombre,descripcion,cantidad}=req.body;
            if(id==undefined || nombre == undefined || descripcion == undefined || cantidad == undefined){
               res.status(400).json({message:"Por favor llena todos los campos"});
             }
            const material ={id,nombre,descripcion,cantidad};
            const connection=await getConnection();
            const result=await connection.query("UPDATE material SET =?", material);
            res.json(result);
         }catch(error){
            res.status(500);
            res.send(error.message);
         }
         };

         const checador=async(req,res)=>{
            res.render('index',{titulo: 'funciona'});
            };

export const methods={
    getmaterial,
    getmat,
    addmaterial,
    delmaterial,
    updatematerial,
    checador
}