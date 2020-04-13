
//1. add option to text box
//2.Store the data which enter in text box
//3. after store data clear the field
//4.Display the No of data entries [create a render function]
//5. Define an array with number and get the data from that array
//6.Display all data which enter in the text box under <li></li>[can enter duplicate data]



console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!');

    const option =e.target.elements.option.value;
    if(option){
        app.options.push(option); // store data in array
        e.target.elements.option.value = ''; // after store data clear the field
        render();
    }
  };
const onRemoveAll = () =>{
  app.options = [];
  render();
};


const appRoot = document.getElementById('app');
const numbers =[55 ,101 ,1000]; // C-1 Pass number from the array
const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>No of data entries : {app.options.length}</p>
        <button onClick={onRemoveAll}>Remove All</button>
        {
          numbers.map((e) => {
            return <p key={e}>numbers : {e} </p> // C_1
          })
        }
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        {/*map over app.options getting back an arrat of list (set key and text)*/}
        <ol>
        {
          app.options.map((e) => {
            return <li key = {e}>Items : {e}</li>
          })
        }
        </ol> 
        <form onSubmit={onFormSubmit}>
            <input typr="text" name="option" />
            <button>Add Option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
};
render();


