



import './App.css';

const pageStuff = {
  imageUrl: "/logo192.png"
}

const user = {
  name: "Obi-Wan Kenobi",
  imageUrl: "/ObiWan.png",
  imageSize: 120,
  quote1: "Hello there.",
  quote2: "Who's the more foolish? The fool, or the fool who follows him?",
};

// const user2 = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 120,
//   quote: "",
// };

function TopBar(){
  return(
    <div 
      className="top-bar">
        <img 
          className="App-logo"
          src={pageStuff.imageUrl}
          alt={"react logo"}  
        />
        <h1 className="top-bar-text">This is my first react project</h1>
    </div>
  );
}

function Profile() {
  return (
    <>
      <h1 className="heading">{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


function MyButton(){
  
  return(
    <button className="learn_btn"
      href="https://reactjs.org">
      <a href="https://reactjs.org"
        className="App-link"
        target="_blank"
        rel="noopener noreferrer" >Learn React</a>
    </button>
  );
}

function AboutPage(){
  return (
    <>
      <h2 className="heading">About</h2>
      <p className="description">{user.quote1}
        <br />
        <div className="description-line">________________________________________</div>
        <br />
        <br />
      {user.quote2}</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <Profile />
        <AboutPage/>
        <MyButton />

      </header>

    </div>
  );
}

export default App;
