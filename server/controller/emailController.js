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
export const getEmails = async (req, res) => {
  try {
    let emails;
    if (false) {
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
