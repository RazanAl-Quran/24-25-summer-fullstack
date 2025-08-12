import React from 'react';
import Child from './Child';

const Employees = ({people}) => {
    return (
        <div>
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


            <Child people={people}/>
        </div>
    );
}

export default Employees;
