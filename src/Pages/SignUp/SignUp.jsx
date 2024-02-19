import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { saveUsers } from "../../hooks/useApi/useApi";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateLoggedInUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (formData) => {
    setError("");

    const email = formData.email;
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    if (password !== confirmPassword) {
      setError("Password & Confirm Password didn't match");
    } else {
      createUser(email, password)
        .then((result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#fabee4",
            title: "User created Successfully",
            showConfirmButton: false,
            timer: 2000,
            background: "crimson",
            color: "white",
          });
          reset();
          const loggedUser = result.user;
          updateLoggedInUser(loggedUser, {
            displayName: formData.name,
            photoURL: formData.url,
          })
            .then(() => {
              saveUsers(result.user);
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          // setError(error.message);
          setError(error.message);
        });
    }
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                })}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
              />
              <p
                onClick={() => handlePassword()}
                className="absolute right-4 bottom-[13px] cursor-pointer"
              >
                {showPassword ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}
              </p>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have 1 uppercase, 1 lowercase, and 1 special
                character
              </p>
            )}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirm password"
                className="input input-bordered"
              />
              <p
                onClick={() => handleConfirmPassword()}
                className="absolute right-4 bottom-[13px] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}
              </p>
            </div>
            <p className="text-red-600 mt-1 text-center">{error}</p>

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
            </div>
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
