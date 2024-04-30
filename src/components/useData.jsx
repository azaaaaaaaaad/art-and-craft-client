import { useEffect, useState } from "react";


const useData = () => {
    const [artData, setArtData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://art-server-nine.vercel.app/subCategories`);
            const data = await response.json();
            setArtData(data);
        }
        fetchData();
    }, []);
    return { artData }
};

export default useData;

