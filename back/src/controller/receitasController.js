const connection = require('../config/db');
const dotenv = require('dotenv').config();
 
async function pawbuddy(request, response) {
   
    const params = Array(
        request.body.user_id,
        request.body.desc_receita,
    );
 
    const query = 'INSERT INTO receitas(user_id,desc_receita) VALUES(?,?)';
 
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    pawbuddy
};