import { Player } from "@lottiefiles/react-lottie-player";
import contactIcon from "../../../assets/contactIcon.json";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    Swal.fire({
      position: "center",
      icon: "success",
      iconColor: "crimson",

      title: "Your Email has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
      background: "purple",
      color: "white",
    });
    reset();
  };
  return (
    <div className=" mt-16 py-4 flex flex-col-reverse md:flex-row md:justify-between bg-gradient-to-t from-fuchsia-400 to-yellow-100">
      <div className="w-full flex flex-col  rounded-md ">
        <p className="font-bold text-3xl md:mt-8 text-center"> Contact Us</p>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
          <div className="form-control">
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-600 mt-1">Please check the Name.</p>
            )}
          </div>
          <div className="form-control">
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="Enter your valid email address"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">Please check the Email.</p>
            )}
          </div>

          <div className="form-control ">
            <textarea
              className="input input- h-24 p-2"
              {...register("aboutYou", { required: true })}
              type="text"
              placeholder="Write your query here"
            />
          </div>
          <div className="flex justify-end">
            <button className="btn bg-pink-800 hover:bg-black text-white capitalize text-lg inline-block">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-full">
        <Player autoplay loop src={contactIcon}></Player>
      </div>
    </div>
  );
};

export default Contact;
