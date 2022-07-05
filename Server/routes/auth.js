import express  from "express";
import { registerDefinition } from "swaggiffy";
import { login, register } from "../controllers/auth.js";
const router=express.Router()

router.post("/register",register)
router.post("/login",login)

registerDefinition(router,{tags:'Users',mappedSchema:'User',basePath:'/api/auth'})
export default router