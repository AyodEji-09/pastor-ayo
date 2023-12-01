import cloudinary from "cloudinary";

const cloud = cloudinary.v2;
cloud.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const upload = async (file) => {
  if (!file)
    return {
      data: "",
      success: "error",
    };
  try {
    const uploadResponse = await cloud.uploader.upload(file, {
      upload_preset: "ayodeji_anifowose",
    //   gravity: "auto",
    //   crop: "fill",
    });

    return {
      success: "ok",
      data: uploadResponse.url,
    };
  } catch (error) {
    return {
      data: error,
      success: "error",
    };
  }
};
