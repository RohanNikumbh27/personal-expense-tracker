const IncomeSchema = require("../models/income.model.js");

exports.handleAddIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    // date: formattedDate,
    date,
  });

  console.log(income);
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount < 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive value" });
    }
    await income.save();
    res.status(200).json({ message: "Income added successfully" });
  } catch (error) {
    console.log("Error while saving the object into database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.handleGetIncomes = async (req, res) => {
  try {
    const incomeList = await IncomeSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(incomeList);
    console.log("Income list is here:", incomeList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "error while getting the incomes List, Server error" });
  }
};
exports.handleDeleteIncome = async (req, res) => {
  const id = req.params.id;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) =>
      res
        .status(200)
        .json({ message: "Income Deleted Successfully Deleted from database" })
    )
    .catch((error) =>
      res
        .status(500)
        .json({ message: "Error while deleting income: Server error" })
    );
};

// Example input
// title: Youtube
// amount: 200
// category: Salary
// description: My Youtube channels income, Education
// date: 2024-06-19
