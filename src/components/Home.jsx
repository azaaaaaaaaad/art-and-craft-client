import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftCard from "./CraftCard";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            {/* <h2 className="text-2xl font-semibold text-center mt-6 mb-6">Craft items section </h2> */}
            <div className="text-2xl font-semibold text-center mt-6 mb-6">
                <Typewriter words={['Craft', 'Items', 'Craft Items']} >
                </Typewriter>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    crafts.map(craft =>
                        <CraftCard
                            key={craft._id}
                            craft={craft}
                        ></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Home;