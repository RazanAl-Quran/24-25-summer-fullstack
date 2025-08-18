import { useEffect } from "react";


function Home() {
    useEffect(() => {
        console.log('mountingggggggggggggggggggg');

    }, []);

    return <h2>🏠 Welcome to the Home Page!</h2>;
}

export default Home;
