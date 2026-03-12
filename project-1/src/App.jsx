import React from 'react'
import Card from './Components/Card'

const App = () => {
  const data=[
  {
    "photo": "https://i.pinimg.com/736x/46/7a/5e/467a5ec02fe5ec0e273dc7d4729c279e.jpg",
    "juice_name": "Orange Juice",
    "ingredients": ["Fresh oranges", "Sugar", "Ice", "Water"],
    "price": 80
  },
  {
    "photo": "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    "juice_name": "Mango Juice",
    "ingredients": ["Ripe mangoes", "Milk", "Sugar", "Ice"],
    "price": 100
  },
  {
    "photo": "https://i.pinimg.com/1200x/b4/2e/c1/b42ec18c5f16a24a1fe1245f2deb6401.jpg",
    "juice_name": "Watermelon Juice",
    "ingredients": ["Watermelon", "Mint leaves", "Sugar", "Ice"],
    "price": 70
  },
  {
    "photo": "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
    "juice_name": "Pineapple Juice",
    "ingredients": ["Pineapple", "Sugar syrup", "Lemon juice", "Ice"],
    "price": 90
  },
  {
    "photo": "https://i.pinimg.com/1200x/e9/b4/14/e9b4147a3dfcfce70c23c2709509aa9e.jpg",
    "juice_name": "Apple Juice",
    "ingredients": ["Fresh apples", "Honey", "Water", "Ice"],
    "price": 85
  },
  {
    "photo": "https://i.pinimg.com/736x/34/57/d4/3457d4bccadd5614b9c4d50a12dd08d9.jpg",
    "juice_name": "Strawberry Juice",
    "ingredients": ["Strawberries", "Sugar", "Lemon juice", "Ice"],
    "price": 110
  },
  {
    "photo": "https://i.pinimg.com/1200x/cb/34/81/cb3481e0cda80b24853eb0c7ab8392fa.jpg",
    "juice_name": "Carrot Juice",
    "ingredients": ["Carrots", "Ginger", "Lemon juice", "Honey"],
    "price": 75
  },
  {
    "photo": "https://images.unsplash.com/photo-1610970881699-44a5587cabec",
    "juice_name": "Pomegranate Juice",
    "ingredients": ["Pomegranate seeds", "Sugar", "Water", "Ice"],
    "price": 120
  },
  {
    "photo": "https://i.pinimg.com/736x/ce/50/ce/ce50cea124776d5ae927cade31268ae6.jpg",
    "juice_name": "Mixed Fruit Juice",
    "ingredients": ["Apple", "Banana", "Mango", "Orange", "Sugar"],
    "price": 130
  },
  {
    "photo": "https://i.pinimg.com/736x/5b/4f/3b/5b4f3b7ae0b9cda9dc2df95fbb908099.jpg",
    "juice_name": "Lemon Mint Juice",
    "ingredients": ["Lemon", "Mint leaves", "Sugar", "Water", "Ice"],
    "price": 60
  }
];
  return (
    <>
    <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
      
     
     {data.map(function(juice){
       return <Card data={juice}/>
      
     })}
    </section>
    </>
    
  );
};

export default App
