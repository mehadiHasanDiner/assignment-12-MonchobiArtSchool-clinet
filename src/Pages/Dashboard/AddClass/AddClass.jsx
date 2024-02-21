import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../hooks/utils/imageUpload";

const AddClass = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    imageUpload(data.img[0]).then((imgRes) => {
      if (imgRes.success) {
        const imgUrl = imgRes.data.display_url;
        const totalSeat = parseFloat(data.availableSeat);
        const totalFee = parseFloat(data.feeAmount);
        const { nameOfClass, instructor, email } = data;
        const newClass = {
          nameOfClass,
          instructor,
          email,
          feeAmount: totalFee,
          availableSeat: totalSeat,
          img: imgUrl,
        };
        console.log(newClass);
      }
    });
  };

  return (
    <div>
      <p>Add a class route</p>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Title</span>
          </label>
          <input
            type="text"
            placeholder="class title"
            className="input input-bordered"
            {...register("nameOfClass")}
            required={true}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-md w-full max-w-xs"
            {...register("img")}
            required={true}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            className="input input-bordered"
            type="text"
            defaultValue={user?.displayName}
            readOnly={true}
            {...register("instructor")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            className="input input-bordered"
            type="email"
            defaultValue={user?.email}
            readOnly={true}
            {...register("email")}
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
            {...register("feeAmount")}
            required={true}
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
            {...register("availableSeat")}
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
