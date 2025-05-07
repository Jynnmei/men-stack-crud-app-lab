import mongoose from "mongoose";

const ClothingSchema = new mongoose.Schema(
  {
    categorie: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { collection: "clothing" }
);

export default mongoose.model("Clothing", ClothingSchema);
