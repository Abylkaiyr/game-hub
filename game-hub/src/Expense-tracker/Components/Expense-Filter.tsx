interface ExpenseFilterProps {
  onChangeFilter: (selectedCategory: string) => void;
}

const ExpenseFilter = ({ onChangeFilter }: ExpenseFilterProps) => {
  return (
    <div className="expense-filter">
      <label htmlFor="filter">Filter by Category</label>
      <select
        className="form-select"
        name="filter"
        id="filter"
        onChange={(e) => onChangeFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
