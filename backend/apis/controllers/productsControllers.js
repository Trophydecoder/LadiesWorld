// controllers/productController.js
const db = require('../config/db'); // your database connection

module.exports.register = async (req, res) => {
    try {
        const { productname, productdescription, productprice, stock } = req.body;

        // Basic validation
        if (!productname || ! productprice || !stock) {
            return res.status(400).json({ message: "Name, price, and stock are required." });
        }

        const priceRegex = /^\d+(\.\d{1,2})?$/;
       if(!priceRegex(productprice)){
        return res.status(400).json({ message: 'Numbers only allowed' });
       }


        // Insert product into the database
        const query = 'INSERT INTO products ( productname, productdescription, productprice, stock) VALUES (?, ?, ?, ?)';
        db.query(query, [productname, productdescription || '',  productprice, stock], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database error." });
            }

            return res.status(201).json({ 
                message: "Product registered successfully!", 
                productId: result.insertId 
            });
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error." });
    }
};
