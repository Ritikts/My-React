import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  let expense = [
    {
      title: "School Fee",
      amount: 4000,
      date: new Date(2022, 4, 23),
    },
    {
      title: "Tution Fee",
      amount: 9000,
      date: new Date(2022, 5, 24),
    },
    {
      title: "College Fee",
      amount: 2000,
      date: new Date(2022, 6, 25),
    },
    {
      title: "House Rent",
      amount: 40000,
      date: new Date(2022, 8, 26),
    },
  ];
  return (
    <div>
      <Expenses item={expense} />
    </div>
  );
};

export default App;
