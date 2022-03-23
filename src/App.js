import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expense = [
    {
      title: "School Fee",
      amount: 4000,
      date: new Date(2022, 4, 23)
    },
    {
      title: "Tution Fee",
      amount: 9000,
      date: new Date(2022, 4, 24)
    },
    {
      title: "College Fee",
      amount: 2000,
      date: new Date(2022, 4, 25)
    },
    {
      title: "House Rent",
      amount: 40000,
      date: new Date(2022, 4, 26)
    }
  ]
  return (
    <div>
      <ExpenseItem
        date={expense[0].date}
        amount={expense[0].amount}
        title={expense[0].title}
      />
      <ExpenseItem
        date={expense[1].date}
        amount={expense[1].amount}
        title={expense[1].title}
      />
      <ExpenseItem
        date={expense[2].date}
        amount={expense[2].amount}
        title={expense[2].title}
      />
      <ExpenseItem
        date={expense[3].date}
        amount={expense[3].amount}
        title={expense[3].title}
      />
    </div>
  );
}

export default App;
