import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const {id} = useParams();
    const details = useLoaderData();
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default ViewDetails;