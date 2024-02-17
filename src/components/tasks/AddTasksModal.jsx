import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    onCancel();
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md mt-2"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md mt-2"
            type="text"
            {...register("description")}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            className="w-full rounded-md mt-2"
            type="date"
            {...register("deadline")}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="assign to">Assign To</label>
          <select className="w-full rounded-md mt-2" {...register("assign to")}>
            <option value="Arif Hossain">Arif Hossain</option>
            <option value="Mahfuz">Mahfuz</option>
            <option value="Sumon Hossain">Sumon Hossain</option>
            <option value="Imran Hossain">Imran Hossain</option>
            <option value="Shohag Hossain">Shohag Hossain</option>
            <option value="Sujon Hossain">Sujon Hossain</option>
          </select>
        </div>
        <div className="mt-3">
          <label htmlFor="piority">Piority</label>
          <select className="w-full rounded-md mt-2" {...register("piority")}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">LOw</option>
          </select>
        </div>

        <div className="mt-4">
          <button
            onClick={() => onCancel()}
            className="btn-primary mr-6 "
            type="button"
          >
            Cancel
          </button>
          <button className="btn-danger " type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTasksModal;
