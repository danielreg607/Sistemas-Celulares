//CRUD
const database = require('../config/database');
const mysql2 = require('mysql2');

const readUser = (req, res) =>{
    const { clave: abonado } = req.params;

    const readQuery = `SELECT * FROM user WHERE abonado=?;`;

    const query = mysql2.format(readQuery, [abonado]);

    database.query(query,(err,result) =>{
        if(err) throw err;
        if(result[0] !== undefined){
            res.json(result[0]);
        }else{
            res.json({message: 'Usuario no encontrado'});
        }
        
    });
};

const createUser = (req, res) => {
    const{ nombre, email }=req.body;
    const createQuery = `INSERT INTO user(nombre, email) VALUE(?,?);`;
    const query = mysql2.format(createQuery, [nombre,email]);

    database.query(query,(err,result) =>{
        if(err) throw err;
        //console.log(result);
        res.send({message: 'Usuario creado'});
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const{ nombre, email } = req.body;

    const updateQuery = `UPDATE user SET nombre=?, email=? WHERE id=?;`;
    const query = mysql2.format(updateQuery,[nombre,email,id]);
    database.query(query,(err,result) =>{
        if(err) throw err;
        res.json({message: 'Usuario actualizado'});
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;

    const deleteQuery = `DELETE FROM user WHERE id=?;`;
    const query = mysql2.format(deleteQuery,[id]);
    database.query(query,(err,result) =>{
        if(err) throw err;
        res.json({message: 'Usuario eliminado'});
    });
};


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
};