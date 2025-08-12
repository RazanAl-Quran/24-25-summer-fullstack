import React from 'react';

const Child = ({people}) => {
    return (
        <div>
            <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {people.map((person, index) => {
                    return (
                        <li key={index}>
                            {person.favoritePet}
                        </li>
                    )
                })

                }
            </ul>

        </div>
    );
}

export default Child;
