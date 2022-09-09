import {getConnection} from "../database/database.js";

function validarCodigo (codigo) {
   if(codigo.match(/\d/g).length===7){
      return false;
   }
   else return true;
}

const listaUsuarios= async(req,res)=>{
   try{
      const connection=await getConnection();
      const listausuarios=await connection.query("SELECT codigo,nombre,area,permisos FROM usuario");
      res.render('index',{listausuarios});
   }catch(error){
      res.status(500);
      res.send(error.message);
   }
   };

const listaChecadas= async(req,res)=>{
   try{
      const connection=await getConnection();
      const listachecadas=await connection.query("SELECT id_check,cod_check,h_check FROM checado");
      res.render('index',{listachecadas});
   }catch(error){
      res.status(500);
      res.send(error.message);
   }
   };

const checada = async(req,res)=>{
   try{
      const {codigo}=req.body.codigo;
      if(codigo == undefined || validarCodigo(codigo)){
        res.status(400).json({message:"Error al redactar el código"});
      }
      var idcheck = null;
      var hora = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const checado={idcheck,codigo,hora};
      const connection=await getConnection();
      const result=await connection.query("INSERT INTO checado SET ?",checado);
      console.log("se checó correctamente");
      res.json(result);
   }catch(error){
      res.status(500);
      res.send(error.message);
   }
};

/* const getmaterial= async(req,res)=>{
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
         }; */

export const methods={
   checada,
   listaUsuarios,
   listaChecadas
}