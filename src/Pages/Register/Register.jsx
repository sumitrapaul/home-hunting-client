/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          localStorage.setItem("userEmail", data.email);
          localStorage.setItem("userRole", data.role);
          localStorage.setItem("userName", data.name);
          localStorage.setItem("userPhone", data.phone);
          console.log(data.role);

          localStorage.setItem("token", result.token);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          if (data.role == "House Owner") {
            navigate("/dashboard/addHome");
          } else if (data.role == "House Renter") {
            navigate("/dashboard/booking");
          } else {
            navigate("/");
          }
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Registration failed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-[400px] md:w-[500px] mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold mb-4 text-[#7e22ce] text-center">
                Register now
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                  name="fullname"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
                {errors.fullname && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>

                <select
                  className="text-input border px-5 py-2 rounded"
                  {...register("role")}
                >
                  <option value="House Owner">House Owner</option>
                  <option value="House Renter">House Renter</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  name="phone"
                  pattern="(\+8801[1-9][0-9]{8}|01[1-9][0-9]{8})"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
                {errors.phone && (
                  <span className="text-red-600">
                    Bangladeshi Phone number field is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 6 })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                Have an account? Please{" "}
                <Link className="text-[#7e22ce] text-2xl font-bold" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
