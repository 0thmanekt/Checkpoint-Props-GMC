import logo from './logo.svg';
import './App.css';
import Profil from './profil/Profil.js';

export default function App() {
      function handleName(name) {
          alert(`Hello, ${name}!`);
      }
      
        return (
          <div className="App">
            <Profil
              fullName="KABBAJ Othmane"
              bio="19 years old, based in Casablanca"
              profession="Computer Science Student"
              handleName= {handleName}>
              {"images/me.png"}
              </Profil>
          </div>
        );
}

