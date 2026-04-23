import { useState, useEffect } from "react";
import styles from "../components/Cardapio.module.css";

// imports que o professor vai passar
function Cardapio() {
  //useState que o professor vai passar
  const [pratos, setPratos] = useState([])
  const [carregando, setCarregando] = useState(true)


  // useEffect que o professor vai passar
  useEffect (() => {
    fetch('https:/www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian') 
  .then(Response => Response.json())
.then(dados => {
  setPratos(dados.meals);
  setCarregando(false);
})
.catch(erro => {
  console.error("Deu ruim na busca", erro)
  setCarregando(false)
})
},[]);

if (carregando) {
  return <h1 className={styles.titulo}>Buscando os melhores pratos...</h1>
}


  // carregamento que o professor vai passar

  return (
    <div className={styles.container}>
      <h1>Cardápio de Pratos Vegetarianos</h1>
      
      <div className={styles.grid}>
        {pratos.map(item => (
          <div key={item.idMeal} className={styles.card}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cardapio