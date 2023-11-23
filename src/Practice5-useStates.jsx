// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
import { useState } from "react";
import "./practice5.css";
// Instead, import & use it like this:
//import React from "react";
//React.useState();

export default function Practice5() {
  const [price, setprice] = useState(100);

  function handleClick(price) {
    console.log("price", price);
    const reduce = 25;
    let result = price - reduce;
    setprice(result);
  }
  return (
    <section className="practice5">
      <h2>Practice 5 - apply discount ==== using useStates HOOK</h2>

      <p data-testid="price">${price}</p>
      <button onClick={() => handleClick(price)}>Apply Discount</button>
    </section>
  );
}

//SOLUCE FROM UDEMY

/* In order to react to <button> clicks, the onClick prop should be added to the <button> element:

export default function App() {
    return (
        <div>
            <p data-testid="price">$100</p>
            <button onClick={}>Apply Discount</button>
        </div>
    );
}


Create a handleClick function (the name is up to you, though) and pass it to the onClick prop as a value:

export default function App() {
    function handleClick() {
      // executed upon <button> clicks!
    }
 
    return (
        <div>
            <p data-testid="price">$100</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}


In order to change values & re-render the UI upon such changes, you must use "state" - a core React concept. In functional components, state can be registered via the useState() Hook. This Hook returns an array with exactly (!) two elements:

The current state value

A function that should be called to update the state value

Update the App component function like this to register + output a new price state value (the name of the state variable is up to you):

import React from 'react';
 
export default function App() {
    const [price, setPrice] = React.useState(100); // 100 is the default price state
 
    function handleClick() {
      // executed upon <button> clicks!
    }
 
    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}
Please note that the default state value for price is set to 100.



As a last step, call the state updating function inside of handleClick() and set the price to 75 when the button is clicked:

import React from 'react';
 
export default function App() {
    const [price, setPrice] = React.useState(100);
    
    function handleClick() {
        setPrice(75);
    }
    
    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}

 */
