import { AddTodoProps } from "../types";
import { FcApproval } from "react-icons/fc";

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => (
  <form
    className="flex justify-between w-full"
    onSubmit={(handleSubmitTodo)}
  >
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
      <FcApproval size={50} />
    </button>
  </form>
);
