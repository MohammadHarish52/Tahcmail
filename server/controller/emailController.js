import Email from "../models/emailModel.js";

export const saveSentEmails = async (req, res) => {
  try {
    const newEmail = new Email(req.body);
    await newEmail.save();
    res.status(201).json({ message: "Email saved succefully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
