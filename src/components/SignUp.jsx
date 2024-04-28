import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { data } from "autoprefixer";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // Password validation
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        if (password.length < 6 || !uppercaseRegex.test(password) || !lowercaseRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password must contain at least 6 characters with both uppercase and lowercase letters.",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }

        //createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const users = { name, email };
                fetch(`https://art-server-nine.vercel.app/users/`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            console.log('user added to DB');
                            Swal.fire({
                                icon: "success",
                                title: "User has created and added to DB",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        e.target.reset();
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p>Already have ana account? please <Link to={'/signin'}><button className="btn btn-sm btn-link">Login</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;