import { useLoaderData } from "react-router-dom";
import ArtCard from "./ArtCard";
import useData from "./useData";


const ArtAndCraftCategories = () => {

    const{artData} = useData();
    const subCategories = useLoaderData();
    

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center">Art And Craft Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    artData.map(category =>
                        <ArtCard
                            key={category._id}
                            category={category}
                        ></ArtCard>)
                }
            </div>
        </div>
    );
};

export default ArtAndCraftCategories;