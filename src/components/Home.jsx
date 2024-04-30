import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftCard from "./CraftCard";
import { Typewriter } from 'react-simple-typewriter'
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import './styles.css';
import ArtAndCraftCategories from "./ArtAndCraftCategories";


const Home = () => {

    const crafts = useLoaderData();
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    console.log(theme);

    return (
        <div className={theme === 'dark' ? 'dark' : 'light'}>
            <label className="flex cursor-pointer gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <input onChange={handleToggle} type="checkbox" value="dark" className="toggle theme-controller" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            <Fade direction="down">
                <Banner></Banner>
            </Fade>
            {/* craft items section */}
            <div className="text-2xl font-semibold text-center mt-6 mb-6">
                <Typewriter words={['Craft', 'Items', 'Craft Items']} >
                </Typewriter>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                <Fade direction="left">
                    {
                        crafts.map(craft =>
                            <CraftCard
                                key={craft._id}
                                craft={craft}
                            ></CraftCard>)
                    }
                </Fade>
            </div>
            <div className="mt-6">
                <Fade direction="right">
                    <ArtAndCraftCategories></ArtAndCraftCategories>
                </Fade>
            </div>
            <Fade direction="left">
                <ExtraOne></ExtraOne>
            </Fade>
            <Fade direction="right">
                <ExtraTwo></ExtraTwo>
            </Fade>

        </div>
    );
};

export default Home;