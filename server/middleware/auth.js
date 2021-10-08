import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token,"mySecretKey",  process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    req.userId = decoded._id;
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(403);
  }
};
export default verifyToken;
