import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-extrabold text-center mb-6">Error Page Not Found</h2>
            <Link to={'/'}>
                <button className="btn">Go Back To Home</button>
            </Link>
        </div>
    );
};

export default Error;