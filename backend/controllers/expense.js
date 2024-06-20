const ExpenseSchema = require("../models/expense.model.js");

exports.handleAddExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    // date: formattedDate,
    date,
  });

  console.log(expense);
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount < 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive value" });
    }
    await expense.save();
    res
      .status(200)
      .json({ message: "Expense added successfully to the database" });
  } catch (error) {
    res.status(500).json({
      message: "Error while saving the Expense, Server Error",
    });
  }
};

exports.handleGetExpenses = async (req, res) => {
  try {
    const incomeList = await ExpenseSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(incomeList);
    console.log("Income list is here:", incomeList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "error while getting the incomes List, Server error" });
  }
};
exports.handleDeleteExpense = async (req, res) => {
  const id = req.params.id;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) =>
      res
        .status(200)
        .json({ message: "expense Deleted Successfully Deleted from database" })
    )
    .catch((error) =>
      res
        .status(500)
        .json({ message: "Error while deleting expense: Server error" })
    );
};

// Example expense
// title: Youtube expense
// amount: 200
// category: Salary
// description: My Youtube channels expense, Education
// date: 2024-06-19
