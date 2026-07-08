import {useRef, useState} from "react";

// import { useRef } from "react";

function App() {

    // create ref
const inputRef=useRef()

    // create focusInput function
function focusInput(){
  inputRef.current.focus()
}
    return (
        <div>

            <input ref={inputRef}/>

            <button>
                Click Me
            </button>
      

        </div>
    );
}

export default App;