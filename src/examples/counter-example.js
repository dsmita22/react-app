// Click on button with attribute onClick  [C_5]
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    // substract 1 from count then rerender
    count--;
    renderCounterApp();
};
const reset = () => {
    //set count to 0 and rerender
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateFive = (
        <div>
        <h1>Count : {count}</h1>
        <button onClick = {addOne}>+1</button>
        <button onClick = {minusOne}>-1</button> 
        <button onClick = {reset}>Reset</button> 
        </div>
    );
    ReactDOM.render(templateFive, appRoot);
};
renderCounterApp();
