import express from "express";
import ProductList from "../../react/src/components/ProductList/ProductList";

import {
    getAllProducts,
    createProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Product/Product.js";
import Product from "../modules/productModel";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create', createProducts);
router.patch('/upd/:id', updateProduct);
router.delete('/del/:id', deleteProduct);

export default router;