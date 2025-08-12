import React, { useState } from 'react';


const People = () => {

    const [username, setUsername] = useState("");
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [people, setPeople] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        // if(username && height && fav)

        // we should collect the states in an object

        const newPerson = {
            username,
            height,
            favoritePet
        };

        console.log(newPerson);


        // push the new obj to the people array
        // setPeople(people.push(newPerson));

        setPeople([...people, newPerson]);

        // console.log(people);

        // Clear form
        setUsername("");
        setHeight("");
        setFavoritePet("");


    }


    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add a Person</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
                <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <input
                    type="text"
                    placeholder="Favorite Pet"
                    value={favoritePet}
                    onChange={(e) => setFavoritePet(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />
                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>

            <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {people.map((person, index) => {
                    return (
                        <li  key={index}>
                            {person.username} - {person.height} - {person.favoritePet}
                        </li>
                    )
                })

                }
            </ul>


        </div>
    );
}

export default People;
