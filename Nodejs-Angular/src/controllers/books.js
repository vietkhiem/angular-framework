import Books from "../models/books";

export const getBooks = async (req, res) => {
  try {
    const books = await Books.find().exec();
    res.json(books);
  } catch (error) {
    res.json({ message: "Can not find any book" });
  }
};

export const read = async (req, res) => {
  try {
    const book = await Books.findById({ _id: req.params.id }).exec();
    res.json(book);
  } catch (error) {
    res.json({ message: "Can not find any book" });
  }
};
export const create = async (req, res) => {
  try {
    const book = await new Books(req.body).save();
    res.json(book);
  } catch (error) {
    res.json({ message: "Can not add book" });
  }
};

export const update = async (req, res) => {
  try {
    const condition = { _id: req.params.id };
    const update = { $set: req.body };
    const option = { new: true };
    const book = await Books.findOneAndUpdate(condition, update, option).exec();
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({
      message: "Can not update book",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete({ _id: req.params.id }).exec();
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: "Can not delete book" });
  }
};

export const list = async (req, res) => {
  try {
    const books = await Books.find()
      .limit(req.query.limit)
      .sort("title")
      .exec();
    res.json(books);
  } catch (error) {
    res.json({ message: "Can not find any book" });
  }
};
