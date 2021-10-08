import { postModels } from "../models/postModels.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModels.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const getPostsId = async (req, res) => {
  try {
    const postsId = req.body._id;
    const posts = await postModels.findOne(postsId);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const createPosts = async (req, res) => {
  try {
    const newPost = req.body;
    const post = await postModels.create(newPost);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const updatePosts = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await postModels.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const deletePosts = async (req, res) => {
  try {
    const postID = req.body._id;
    const post = await postModels.findOneAndDelete(postID);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
