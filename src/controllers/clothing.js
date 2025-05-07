import Clothing from "../models/Clothing.js";

// view all cloth = GET(read)
export const getCloth = async (req, res) => {
  const allCloth = await Clothing.find();
  res.json(allCloth);
};

// create = POST
export const postCloth = async (req, res) => {
  const newCloth = new Clothing({
    categorie: req.body.categorie,
    quantity: req.body.quantity,
  });
  await newCloth.save();

  res.json({ status: "ok", msg: "saved" });
};

// delete = DELETE
export const deleteCloth = async (req, res) => {
  await Clothing.findByIdAndDelete(req.params.id);

  res.json({ status: "ok", msg: "cloth deleted" });
};

// update = PATCH
export const patchCloth = async (req, res) => {
  const respone = await Clothing.findByIdAndUpdate(req.params.id, {
    categorie: req.body.categorie,
    quantity: req.body.quantity,
  });

  console.log(respone);

  res.json({ status: "ok", msg: "cloth updated" });
};
