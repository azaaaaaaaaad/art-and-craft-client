import { useLoaderData } from "react-router-dom";
import AllCraftCard from "./AllCraftTable";


const AllArtCraft = () => {

    const crafts = useLoaderData();

    return (
        <div>
             <h2 className="text-2xl font-semibold text-center mt-6 mb-6">All Art & Craft Items page:</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                
                {
                    
                    crafts.map(craft =>
                        <AllCraftCard
                            key={craft._id}
                            craft={craft}
                        ></AllCraftCard>
                    
                    )
                }
            </div>
        </div>
    );
};

export default AllArtCraft;