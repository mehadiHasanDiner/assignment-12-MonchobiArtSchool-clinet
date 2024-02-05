import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="mt-8 bg">
      <h1 className="text-4xl font-bold text-center">Please Sign Up</h1>
      <div className="m-auto hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left "></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-300">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-600 mt-1">Please check the Name.</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600 mt-1">Please check the Email.</p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
              />
              <p
                onClick={() => handleShowPassword()}
                className="absolute right-4 bottom-[13px] cursor-pointer"
              >
                {showPassword ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}
              </p>
              {/* {errors.password && (
                <p className="text-red-600 mt-1">Please check the Password.</p>
              )} */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("url", { required: true })}
                type="url"
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {/* {errors.password && (
                <p className="text-red-600 mt-1">Please check the Password.</p>
              )}             */}
            </div>
            <span className="text-warning text-center"></span>
            <div className="form-control">
              <button className="btn bg-pink-800 hover:bg-black text-white  capitalize text-lg">
                Sign Up
              </button>
            </div>
            {/* <span className="text-success text-center"> success</span> */}

            <label className="label">
              <span>
                Already have an account?
                <Link
                  to="/login"
                  className="text-center label-text-alt link link-hover hover:font-bold text-lg text-pink-700"
                >
                  {" "}
                  Sign In!
                </Link>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
