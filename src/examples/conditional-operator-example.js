console.log('App.js is running!');

// JSX - JavaScript XML
const template = (
<div>
<h1>Indecision App</h1> 
<p>This is some info</p>
<ol>
    <li>Item one</li>
    <li>Item two</li>
</ol>
</div>
);

// Pass value using const
// C-1 : Conditional rendering (if user has location return location name , else return 'Unknown' ) 
// C-2 :Conditional rendering (if user has location return location name , else nothing will display )
const user1 ={
    name: 'Smita',
    Age: 26,
    location: 'Australia'
    //location: 'Australia'  // C-2
};

function getLocation(location){
    if (location) {
       // return location; C-1
       return <p>Location:{location}</p> //c-2
    }
    // } else {
    //    // return 'Unknown'; C-1
    // }  // c-2 remove the else block
}
//    <p>Location:{getLocation(user.location)}</p> //c-1
const templateTwo = (
    <div>
    <h1>{user1.name}</h1>
    <p>Age:{user1.Age}</p>
    {getLocation(user1.location)}
    </div>
);

// Pass value using const
// const userName ='Smita';
// const userAge =27;
// const userLocation = 'austraila'
// const templateTwo = (
//     <div>
//     <h1>{userName}</h1>
//     <p>Age:{userAge}</p>
//     <p>Location:{userLocation}</p>
//     </div>
// );


//C-3 ternary operator 
const user2 ={
    Age: 26,
    location: 'Australia'
};
function getLocation(location){
    if (location) {
       return <p>Location:{location}</p>
    }
}
const templateThree = (
    <div>
    <h1>{user2.name ? user2.name : 'Anonymous'}</h1>
    <p>Age:{user2.Age}</p>
    {getLocation(user2.location)}
    </div>
);

//C-4 AND operator (IF user has Age field and user ager is greater than equals 18 than only Age field will display)
const user3 ={
    name: 'Smita',
    Age: 17,
    //Age:27,
    location: 'Australia'
};
function getLocation(location){
    if (location) {
       return <p>Location:{location}</p>
    }
}
const templateFour = (
    <div>
    <h1>{user3.name ? user3.name : 'Anonymous'}</h1>
    {(user3.Age && user3.Age >=18) && <p>Age : {user3.Age}</p>}
    {getLocation(user3.location)}
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);