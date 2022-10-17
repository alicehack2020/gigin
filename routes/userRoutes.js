import express from "express"
const router=express.Router();

import UserController from "../controllers/userController.js"


//public routes
router.post('/addAuthor',UserController.addAuthor);
router.post('/addBook',UserController.addBook);
router.get('/showAuthor',UserController.showAuthor);
router.post('/findBookByAuthorName',UserController.findBookByAuthorName);
router.get('/catlogList',UserController.catlogList);
router.post('/mostSoldBuyCategory',UserController.mostSoldBuyCategory);
 



export default router;