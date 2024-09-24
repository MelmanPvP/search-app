import css from './searchpage.module.scss'
import {useEffect, useState} from "react";
import Result from "../result/result.tsx";

interface ResultType {
    id: number;
    title: string;
    description: string;
}
export default function SearchPage (){
    const mockFoodResults: ResultType[] = [
        { id: 1, title: 'Best Receipts for Burgers', description: 'Burgers are one of the most popular fast food items...' },
        { id: 2, title: 'Tasty Pizza Ideas', description: 'Explore various pizza recipes with unique toppings...' },
        { id: 3, title: 'How to Make Delicious Pasta', description: 'Pasta is a versatile and easy dish to cook at home...' },
        { id: 4, title: 'Healthy Salad Recipes', description: 'Salads can be both nutritious and delicious when done right...' },
        { id: 5, title: 'The Best Homemade Tacos', description: 'Tacos are a great way to enjoy a quick and flavorful meal...' },
        { id: 6, title: 'Top 10 Sushi Rolls', description: 'Learn how to roll sushi like a pro with these tips...' },
        { id: 7, title: 'Perfect Grilled Steak', description: 'Achieve the perfect steak with these grilling techniques...' },
        { id: 8, title: 'Easy Vegetarian Meals', description: 'Vegetarian meals that are easy to prepare and taste amazing...' },
        { id: 9, title: 'Best Fast Food Chains in America', description: 'Discover the most popular fast food chains across the US...' },
        { id: 10, title: 'Breakfast Smoothie Ideas', description: 'Start your day with these healthy and refreshing smoothies...' },
        { id: 11, title: 'Ultimate Dessert Guide', description: 'Indulge in these sweet treats that are perfect for any occasion...' },
        { id: 12, title: 'Fried Chicken Secrets', description: 'Learn the secrets to making crispy and juicy fried chicken...' },
        { id: 13, title: 'Perfecting BBQ Ribs', description: 'Master the art of BBQ with this step-by-step guide to ribs...' },
        { id: 14, title: 'Gourmet Burgers at Home', description: 'Upgrade your burgers with these gourmet ingredients and ideas...' },
        { id: 15, title: 'Quick and Easy Snacks', description: 'Snacks you can make in minutes for a quick bite...' },
    ];
    const mockGameResults: ResultType[] = [
        { id: 1, title: 'Top 10 RPGs of All Time', description: 'Explore the greatest role-playing games with deep stories and engaging gameplay...' },
        { id: 2, title: 'Best Open-World Games', description: 'Dive into these immersive open-world games that let you explore vast environments...' },
        { id: 3, title: 'How to Master First-Person Shooters', description: 'Learn advanced strategies to dominate in competitive first-person shooter games...' },
        { id: 4, title: 'Best Indie Games You Should Play', description: 'Discover hidden indie gems that provide fresh and innovative gaming experiences...' },
        { id: 5, title: 'Top Survival Horror Games', description: 'Survive terrifying environments and enemies in these top-rated survival horror games...' },
        { id: 6, title: 'Ultimate Fighting Games Guide', description: 'Unleash your inner fighter with these fast-paced and competitive fighting games...' },
        { id: 7, title: 'Building the Perfect Gaming PC', description: 'A complete guide to building a powerful PC for an optimal gaming experience...' },
        { id: 8, title: 'Best Multiplayer Games of the Year', description: 'Team up with friends or compete against others in these top multiplayer games...' },
        { id: 9, title: 'The Evolution of Console Gaming', description: 'Take a look at the history and evolution of consoles from the past to the present...' },
        { id: 10, title: 'Fastest Speedrun Records', description: 'Check out the fastest times and records set by speedrunners across popular games...' },
        { id: 11, title: 'How to Get Started in Esports', description: 'Learn how to break into the world of competitive gaming and esports...' },
        { id: 12, title: 'Best Platformers to Play', description: 'Jump, run, and explore in these fun and challenging platforming games...' },
        { id: 13, title: 'Top Virtual Reality Games', description: 'Step into the future with these immersive VR experiences that push the boundaries of gaming...' },
        { id: 14, title: 'Retro Games That Defined the Industry', description: 'Go back in time and relive the golden age of gaming with these classic retro titles...' },
        { id: 15, title: 'Guide to Free-to-Play Games', description: 'Enjoy these highly-rated free-to-play games without spending a dime...' },
    ];
  const [search,setSearch]=useState<string>('');
  const [results, setResults] = useState<ResultType[]>([]);
    const [isBanner1,setBanner1]=useState(true)
    const [isBanner2,setBanner2]=useState(false)
    const [isClicked,setClicked] = useState(false)

    const [currentFont, setCurrentFont] = useState('Merriweather');
    function Switch(){
      setBanner1(!isBanner1);
      setBanner2(!isBanner2);
    }
    // Function to toggle between fonts
    const toggleFont = () => {
        setCurrentFont(prevFont => (prevFont === 'Merriweather' ? 'Plus Jakarta Sans ' : 'Merriweather'));
    };

    const handleSearch = () => {
        setClicked(true)
        if (search.toLowerCase() === 'food') {
            setResults(mockFoodResults);
        }
        else if (search.toLowerCase() === 'videogames') {
            setResults(mockFoodResults);
        } else {
            setResults([]); 
        }
    };
    useEffect(() => {
        // This will run every time `isBanner1` is updated
        console.log(' Now displaying:', isBanner1 ? 'Banner 1' : 'Banner 2');
    }, [isBanner1]);  // Dependency on `isBanner1` // Re-run the effect when banners are toggled
    return (
        <div>
            <div className={css.banners}>
                {isBanner1 &&
                    <div className={css.banner1}>
                        <span className={css.banner1__text}>Order &gt; 100$ &rarr; 50% delivery discount</span>
                    </div>
                }
                {isBanner2 &&
                    <div className={css.banner2}>
                        <span className={css.banner2__text}>35% off for all cleaning products!</span>
                    </div>
                }
            </div>
            <div className={css.search}>
                <h1 className={css.title}>Googleplex</h1>
                <div className={css.searchbar}>
                    <button className={css.switch} onClick={Switch}>Switch banner</button>
                    <input placeholder="Search for food..."
                           value={search}
                           onChange={event => setSearch(event.target.value)}
                           className={css.input}/>
                    <button className={css.button} onClick={handleSearch}>Search</button>
                    <button className={css.button_fonts} onClick={toggleFont}>Switch Font</button>
                </div>
            </div>
            <div className={css.results}>
            {(results.length > 0 && isClicked) ? (
                    results.map(result => (
                        <Result key={result.id} title={result.title} description={result.description}
                                font={currentFont}/>
                    ))
                ) : (isClicked) ? (
                    <p className={css.noResults}>No results found</p>
                ) : ''}
            </div>
        </div>
    )
}
