import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link';
import {useState} from 'react';
export default function Home() {
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
            slug:'piz',
            toppings:[' cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'4',
            name:'Cheese Pizza',
            slug:'cvy',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'5',
            name:'Cheese Pizza',
            slug:'cer',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },
        {
            id:'6',
            name:'Cheese Pizza',
            slug:'chevf',
            toppings:['mozzerella, cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            price :9.99,


        },

    ]
const[keyword,setKeyword]=useState('');
const filterPizzas=pizzas.filter(
    pizza=>
    pizza.name.toLocaleLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
)
    const onInputChange=(e) =>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());

    }
    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange}/> 
            </div>
            <div className={styles.pizzaContainer}>
                {filterPizzas<1?
                (
                    <div className={styles.nopeContainer}> There is no pizza or topping with that. </div>
                )
            :
(filterPizzas.map(pizza=>{
return(
    <div className={styles.pizzaItem} key={pizza.id}>
        <Link href={'/${pizza.slug}'}><a className={styles.pizzaImageBox}>
        <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}/></a></Link>
        <div className={styles.pizzaText}>
            <p className={styles.pizzaHeader}>{pizza.name}</p>
            <p className={styles.pizzaToppings}>{pizza.toppings.map(topping=> topping).join(', ')}</p>
            <p className={styles.pizzaPrice}>{pizza.price}</p>
</div>
</div>
)

})

)}
        </div>
    </div>
    )
}
