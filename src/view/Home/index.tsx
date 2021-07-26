import React,{useState,useEffect} from 'react';

import { Container } from './styles';

import api from '../../services/api';

interface IProduct{
  id:number;
  photo:string;
  name:string;
  description:string;
  price:number;
}
const Home: React.FC = () => {
  const[data,setData]=useState<IProduct[]>([]);
  useEffect(()=>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )

  },[])

  const handleCart=( index:number )=>{
    const productStorage = JSON.stringify(data[index])
    localStorage.setItem(`@produto-${index}`,productStorage)
  }

  return (
    <Container>
      <section>
        {data.map((prod,index)=>(
           <div className="product-content" key={prod.id}>
           <img src={prod.photo} alt="smartphone" width="250" height="auto"/>
           <h4>{prod.name}</h4>
           <span>{prod.description}</span>
           <h5>R$ {prod.price.toFixed(2)}</h5>
           <button onClick={()=>handleCart(index)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;