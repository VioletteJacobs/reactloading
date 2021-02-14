import React, {useState, useEffect} from "react";
import './App.css';
import Loader from "./Loader"

function App() {
  // use effect démarrant à true car de bas on veut voir le gif. 
  const [loader, setLoader] = useState(true)

  // quand le composant à fini de se charger tableau vide pour qu'il se lance seulement la première fois: timeOut rendant le gif invisible au bout d e3secondes.

  useEffect(() => {
    setTimeout(()=>{
      setLoader(false);
    },3000)

  }, [])
  // return conditionnel si loader est true alors on envoie le gif, sinon on envoit le site. 
  return loader? (
    <Loader />
  ): (
    <div className="App">
      <h1>Test de loading</h1>
      
    </div>
  );
}

export default App;
