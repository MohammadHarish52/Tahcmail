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
    if (req.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await Email.find({});
    } else if (req.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false });
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveBinEmails = async (req, res) => {
  try {
    await Email.updateMany(
      { _id: { $in: req.body } }, // $in updates things one by one
      { $set: { bin: true, starrred: false, type: "" } }
    );
    return res.status(200).json("emails deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const toggleStarEmails = async (req, res) => {
  try {
    await Email.updateMany(
      {
        _id: req.body.id,
      },
      { $set: { starred: req.body.value } }
    );
    return res.json("email is marked");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
