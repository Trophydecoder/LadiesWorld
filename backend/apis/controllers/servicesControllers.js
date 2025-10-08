

module.exports.registerService= async (req, res) => {
    try {
        const { Servicename, Serviceprice, ServiceDuration} = req.body;
n
        // Basic validation
        if (!Servicename || ! Serviceprice || !ServiceDuration) {
            return res.status(400).json({ message: "Service, price, and Duration are required." });
        }

        const priceRegex = /^\d+(\.\d{1,2})?$/;
       if(!priceRegex(Serviceprice)){
        return res.status(400).json({ message: 'Numbers only allowed' });
       }


        // Insert product into the database
        const query = 'INSERT INTO products ( Servicename, Serviceprice, ServiceDuration) VALUES (?, ?, ?, ?)';
        db.query(query, [Servicename|| '',  Serviceprice, ServiceDuration], (err, result) => {
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
