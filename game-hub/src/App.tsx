import { useState } from "react";
import ExpenseList from "./Expense-tracker/Components/Expense-List";
import ExpenseTrackerForm from "./Expense-tracker/Components/Expense-Tracker-Form";
import ExpenseFilter from "./Expense-tracker/Components/Expense-Filter";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 100,
      category: "groceries",
    },
    {
      id: 2,
      description: "Internet",
      amount: 50,
      category: "utilities",
    },
    {
      id: 3,
      description: "Netflix",
      amount: 20,
      category: "entertainment",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <div className="expense">
      <ExpenseTrackerForm
        onSubmitForm={(expense) =>
          setExpenses([...expenses, { id: expenses.length + 1, ...expense }])
        }
      />

      <ExpenseFilter
        onChangeFilter={(selectedCategory) =>
          setSelectedCategory(selectedCategory)
        }
      />

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
