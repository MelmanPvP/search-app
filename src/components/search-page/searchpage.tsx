import css from './searchpage.module.scss'
import {useEffect, useState} from "react";
import Result from "../result/result.tsx";

interface ResultType {
    id: number;
    title: string;
    description: string;
}
export default function SearchPage (){
    const mockResults: ResultType[] = [
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
        // If search term is "food", display the mock data
        if (search.toLowerCase() === 'food') {
            setResults(mockResults);
        } else {
            setResults([]); // Clear results if no match
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
