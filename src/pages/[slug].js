import React from 'react'
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';
export default function Pizza({pizza, otherPizzas }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
                
            </Head>
            <div className={styles.pizzaWrapperLeft}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}/>
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>
                        {pizza.name}
                    </p>
                    <p className={styles.pizzaDescription}>
                        {pizza.description}
                    </p>
                    <p className={styles.pizzaPrice}>
                        {pizza.price}
                    </p>
                </div>
           
             <div className={styles.otherPizzasWrapper}>
                 {otherPizzas.map(otherpizza=>{
                     return(
                         <div className={styles.otherPizzas} key={otherpizza.id}>
                         <Link href={"/" +otherpizza.slug}><a>
                             <img src={otherpizza.image} alt={otherpizza.name}/><p>{otherpizza.name}</p></a></Link>
                             </div>
                     )
                 })}
             </div>
        </div>
        </div>
    )
}

export const getStaticPaths= async () =>{

    const pizzas=[
        {
            id:'1',
            name:'Cheese Pizza',
            slug:'cheese-pizza',
            toppings:['mozzerella, cheese'],
            image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'2',
            name:'Meat Pizza',
            slug:'meat-pizza',
            toppings:['pepperoni, cheese,chicken'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :10.99,


        },
        {
            id:'3',
            name:' Pizza',
            slug:'pizza',
            toppings:[' cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'4',
            name:'Cheese Pizza',
            slug:'cheepizza',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'5',
            name:'Cheese Pizza',
            slug:'che',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'6',
            name:'Cheese Pizza',
            slug:'chee',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },

    ]
    const paths= pizzas.map(pizza=>({
        params: {slug: `${pizza.slug}`}
    }) );
    return {
        paths,
       fallback:false,
    }

}

export const getStaticProps=async({params})=>{

    const pizzas=[
        {
            id:'1',
            name:'Cheese Pizza',
            slug:'cheese-pizza',
            toppings:['mozzerella, cheese'],
            image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'2',
            name:'Meat Pizza',
            slug:'meat-pizza',
            toppings:['pepperoni, cheese,chicken'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :10.99,


        },
        {
            id:'3',
            name:' Pizza',
            slug:'pizza',
            toppings:[' cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'4',
            name:'Cheese Pizza',
            slug:'cheese-pizza',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'5',
            name:'Cheese Pizza',
            slug:'cheese-pizza',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'6',
            name:'Cheese Pizza',
            slug:'cheese-pizza',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },

    ]
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas= pizzas.filter(pizza=>pizza.slug !== params.slug);
    return {
        props:{
            pizza:pizza[0],
            otherPizzas:otherPizzas.sort(() => Math.random() - Math.random()).slice(0,3),
        }
    }
}