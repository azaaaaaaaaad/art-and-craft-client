
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'
import { FaGoogle, FaGithub } from "react-icons/fa";


const SignIn = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleSignIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //sign in
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
                if (result.user) {
                    Swal.fire({
                        icon: "success",
                        title: "Login Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
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
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" name="name" placeholder="email" className="input input-bordered" required />
                            </div> */}
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
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                            <p>New Here? please <Link to={'/signup'}><button className="btn btn-sm btn-link">Register</button></Link></p>
                        </form>
                        <div className="divider">Social Logins</div>
                        <div>
                            <div className="flex justify-around mb-4">
                                <div>
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn">
                                        <FaGoogle></FaGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button
                                    onClick={handleGithubLogin}
                                        className="btn">
                                        <FaGithub></FaGithub>
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;