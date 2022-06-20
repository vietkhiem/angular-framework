import { Router } from "express";
import { list, create, read, update, remove } from "../controllers/books";
const router = Router();

router.get("/books/:id", read);

router.post("/books", create);

router.put("/books/:id", update);

router.delete("/books/:id", remove);

router.get("/books", list);

export default router;
