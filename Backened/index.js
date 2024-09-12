const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./Config/Dbconfig');
const userRoutes = require('./Routes/users');
const orderRoutes = require('./Routes/orderRoutes');
const productRoutes = require('./Routes/products');

// Import controllers
const userupload = require('./Controllers/userController');
const {getUserByEmail} = require('./Controllers/users')
const user = require('./Controllers/users');
const { createProduct, deleteOneProduct, updateOneProduct,getAllProducts } = require('./Controllers/productController');
const { login } = require('./Controllers/login');
const { addCustomer, getCustomers } = require('./Controllers/customerController');
const { getCustomerByEmail } = require('./Controllers/getCustomerEmail');
const { fakeProductgenerator } = require('./Controllers/generateRandomData');
const { countryName } = require('./Controllers/countryController');
  
// App initialization
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('Image');

// Connect to database
connectDB();

// Route handlers
app.use('/api/user', userRoutes);
app.use('/api', orderRoutes);
app.use('/products', productRoutes);

app.get('/getuser', user.getuser);
app.post('/adduser',upload, userupload.registerUser);
app.get('/getAllUsers', user.getAllUsers);
app.get('/getAllProducts', getAllProducts);
app.post('/login', login);
app.post('/addCustomer', upload, addCustomer);
app.get('/getCustomers', getCustomers);
app.post('/getCustomerByEmail', getCustomerByEmail);
app.get('/fakeProductgenerator', fakeProductgenerator);
app.post('/countryName', countryName);
app.delete('/deleteOneProduct/:id', deleteOneProduct);
app.put('/updateOneProduct/:id', updateOneProduct);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is working on http://${HOST}:${PORT}`);
});
