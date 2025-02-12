import cloudinary from "cloudinary";

export const generateCloudinaryUrl = async (imageFile: Express.Multer.File) => {
  const base64Image = Buffer.from(imageFile.buffer).toString("base64");
  const dataUri = `data:${imageFile.mimetype};base64,${base64Image}`;
  const uploadResponse = await cloudinary.v2.uploader.upload(dataUri);

  return uploadResponse.url;
};
