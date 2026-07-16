import React from "react";

function Child({ name }) {

    console.log("Child Rendered");

    return (
        <div>

            <h2>Child Component</h2>

            <h3>Name : {name}</h3>

        </div>
    );

}

export default React.memo(Child);