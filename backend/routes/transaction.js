const router = require("express").Router();
const {
  handleAddIncome,
  handleGetIncomes,
  handleDeleteIncome,
} = require("../controllers/income.js");
const {
  handleAddExpense,
  handleGetExpenses,
  handleDeleteExpense,
} = require("../controllers/expense.js");

router
  .post("/add-income", handleAddIncome)
  .get("/get-incomes", handleGetIncomes)
  .delete("/delete-income/:id", handleDeleteIncome)
  .post("/add-expense", handleAddExpense)
  .get("/get-expenses", handleGetExpenses)
  .delete("/delete-expense/:id", handleDeleteExpense);

module.exports = router;
