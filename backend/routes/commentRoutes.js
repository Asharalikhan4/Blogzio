import express from "express";
const router = express.Router();
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentController";
import { authGuard } from "../middlewares/authMiddleware";

router.post("/", authGuard, createComment);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

export default router;