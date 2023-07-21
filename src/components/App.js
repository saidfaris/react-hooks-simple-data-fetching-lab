// create your App component here
import React, { useEffect, useState } from "react";

function App(){

    const [isDog, setDog] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) =>{
            setDog(data.message);
            setIsLoading(false);         
    }) 
    }, []);


    return (
        <div>
            {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <div>
                    <img src={isDog} alt="A Random Dog"/>
                    </div>
                  )
            }
        </div>
    )
}

export default App;