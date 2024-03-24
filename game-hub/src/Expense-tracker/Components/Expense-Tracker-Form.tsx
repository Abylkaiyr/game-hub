import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description should be string",
    })
    .min(3, { message: "Description should be at least 3 characters long" }),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z.string().min(1, { message: "Please select category" }),
});

type FormData = z.infer<typeof schema>;
interface ExpenseTrackerFormProps {
  onSubmitForm: (item: FormData) => void;
}

const ExpenseTrackerForm = ({ onSubmitForm }: ExpenseTrackerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    onSubmitForm(data);
    reset();
  };

  return (
    <div className="expense-tracker-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            {...register("category")}
            defaultValue=""
          >
            <option disabled value="">
              Select Category
            </option>
            <option value="groceries">Groceries</option>
            <option value="utilites">Utilites</option>
            <option value="entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseTrackerForm;
