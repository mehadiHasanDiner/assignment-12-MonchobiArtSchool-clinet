import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../hooks/utils/imageUpload";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    imageUpload(data.img[0]).then((imgRes) => {
      if (imgRes.success) {
        const imgUrl = imgRes.data.display_url;
        const totalSeat = parseFloat(data.availableSeat);
        const totalFee = parseFloat(data.feeAmount);
        const { nameOfClass, instructor, email } = data;

        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "crimson",
          title: `${nameOfClass} class added successfully!`,
          showConfirmButton: false,
          timer: 1500,
          background: "purple",
          color: "white",
        });

        const newClass = {
          nameOfClass,
          instructor,
          email,
          feeAmount: totalFee,
          availableSeat: totalSeat,
          img: imgUrl,
          status: "pending",
        };
        axiosSecure.post("/newClass", newClass).then((res) => {
          console.log(res, "after posting new item");
          res.data;
        });
      }
      reset();
    });
  };

  return (
    <div>
      <Helmet>
        <title>Add Class | Monchobi Art School </title>
      </Helmet>
      <p className="text-3xl font-bold text-pink-700 mt-4 -mb-4">
        Add a New Class
      </p>
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
            className="file-input file-input-secondary file-input-md w-full max-w-xs"
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
            placeholder="Reg. fee"
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
          <button className="btn btn-outline bg-pink-700 hover:bg-pink-500 text-white text-lg font-bold">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
