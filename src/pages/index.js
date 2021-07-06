import Home from '../components/Home/Home';

export default function home({pizzas}) {
  return (
   <Home pizzas={pizzas}/>
  )
}

export const getStaticProps=async({params})=>{

  const res = await fetch('https://kbpizza.herokuapp.com/pizza/');
  const pizzas = await res.json();
 
  return {
      props: {
          pizzas,
         
      }
  }
}