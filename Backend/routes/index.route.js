import expres from "express";
import allProductsController from "../controllers/allProductsController.js";
import getSingleProduct from "../controllers/getSingleProduct.js";

const router = expres.Router();

// Home route
router.get('/',(req,res)=>{
    res.send(`<h1>Wecome the the dummy products api</h1>`)
});

// Get all the products
router.get("/products",allProductsController);

// Get single product
router.get("/products/:_id",getSingleProduct);

export default router;
