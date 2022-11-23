import React from 'react';

function Components3(props) {
   const helloWorld = () => {
       alert("Hello world")
   }

    return (
        <>
            <h1>Onclick</h1>
            <button onClick={helloWorld}>Click</button>
        </>
    );
}

export default Components3;
