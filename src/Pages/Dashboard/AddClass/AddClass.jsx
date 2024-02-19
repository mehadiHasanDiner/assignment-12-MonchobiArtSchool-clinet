import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  return (
    <div>
      <p>Add a class route</p>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="class name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-md w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            className="input input-bordered"
            type="text"
            value={user?.displayName}
            readOnly={true}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            className="input input-bordered"
            type="email"
            value={user?.email}
            readOnly={true}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Registration Fee</span>
          </label>
          <input
            type="number"
            placeholder="price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            placeholder="total seats"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
