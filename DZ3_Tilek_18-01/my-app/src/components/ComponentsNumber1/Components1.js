import React from 'react';
import  "./backround1.css"
function Components1(props) {
    const user = {
        name: "Anna",
        age: 19
    }

    return (
        <div className={"Components1"}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>

        </div>
    );
}

export default Components1;