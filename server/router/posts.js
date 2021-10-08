import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  getPostsId,
  deletePosts,
} from "../controllers/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostsId);
router.post("/", createPosts);
router.put("/:id", updatePosts);
router.delete("/:id", deletePosts);
export default router;
