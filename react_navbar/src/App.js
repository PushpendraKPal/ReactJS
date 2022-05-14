import logo from './logo.svg';
import './App.css';
var link = ["Service", "Project", "About"];

function App() {
  return (
    
    <nav>
      <Logo></Logo>
      <Links link={link}/>
      <Button></Button>
    </nav>
  );
}

function Logo(){
  return <h5 class="logo">LOGOBAKERY</h5>
}

function Links(props){
return <ul>
{  
props.link.map((e)=>{
  return <li><a href="#">{e}</a></li>
})
}
</ul>
}

function Button(){
  return <button class="button">Connect</button>
}

export default App;
