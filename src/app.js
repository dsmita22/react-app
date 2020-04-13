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

// Select random option
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()*app.options.length);
  const option = app.options[randomNum];
  alert(option);
};


const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        {/*If no option entered button should be disabled*/}
        <button disabled = {app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
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


