// Middleware to connect to cloudinary
import { v2 as cloudinary } from 'cloudinary';

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

cloudinary.config({
  cloud_name: "dowiubuw3",
  api_key: "869815892485589",
  api_secret: "gYkd6888z22mRVlGdNka6R-UU_w",
});

export default cloudinary;
