import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
export default function App() {
  return (
    // <div style={{display:"flex",flexDirection:"column",backgroundColor:"#f3f0e5",height:"100svh"}}>
    // <h1 style={{textAlign:"center", color:"#f1da8d",fontSize:"50px"}}>FAST REACT PIZZA CO.</h1>
    // <h3 style={{textAlign:"center",marginTop:"-20px"}}> OUR MENU</h3>
    // <p style={{textAlign:"center",marginTop:"-10px"}}>lorem food website is here i am just practicing the APIS with react <br/> i am bigneer here</p>

    // </div>
    <div style={{
      backgroundColor: "#f3f0e5",
      width: "100%",
      height: "100%"
    }}>
      <BariHeading />
      <ChotiHeading />
      <Discr />
      <FoodLIst />
      <Btn />
    </div>
  )
};


function BariHeading() {

  return (<h1 style={{ textAlign: "center", height: "100%", backgroundColor: "#f3f0e5", color: "#e0c56e", fontSize: "40px", marginBottom: "10px", marginTop: "10px" }}> FAST REACT PIZZA CO.</h1>
  )

}
function ChotiHeading() {

  return (<h3 style={{ textAlign: "center" }}> OUR MENU</h3>
  )

}
function Discr() {

  return (<p style={{ textAlign: "center" }}>there are many foods itesm in our website you can cheak  <br /> and teaste our foods items  </p>
  )

}
function FoodLIst() {
  const [fooditem, setFoodItem] = useState(
    [{
      src: "https://www.shutterstock.com/image-photo/korma-chicken4-600nw-223265599.jpg",
      name: "Teasty korma",
      description: "Chiken biryani",
      remainingItems: "20"
    },
    {
      src: "https://www.shutterstock.com/image-photo/korma-chicken4-600nw-223265599.jpg",
      name: "korma",
      description: "beef korma",
      remainingItems: "24"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45Nhuz0X09vs2qdueo-VK8WWqs_dGpd6OVViG5Dg34gSbxEpzDX_HlYEkOjHG0r8bGXg&usqp=CAU",
      name: "Nihari",
      description: "beef nehari",
      remainingItems: "10"
    },
    {
      src: "https://www.shutterstock.com/image-photo/korma-chicken4-600nw-223265599.jpg",
      name: "white korma",
      description: "adasdsadds",
      remainingItems: "30"
    },
    {
      src: "https://www.shutterstock.com/image-photo/korma-chicken4-600nw-223265599.jpg",
      name: "korma ",
      description: "very teasty biryani",
      remainingItems: "5"
    },
    {
      src: "https://www.shutterstock.com/image-photo/korma-chicken4-600nw-223265599.jpg",
      name: "korma",
      description: "adasdsadds",
      remainingItems: "30"
    }
    ])
  return (
    <>
      {/* {
      fooditem.map((fitem)=>{
          console.log("food item found",fitem)
      })
     } */}

      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {fooditem.map((food) => (
          <div style={{ width: "50%" }}>
            <Food foodDetail={food} />
          </div>
        ))}
      </div>
    </>
  )
}

function Food({ foodDetail }) {
  console.log(foodDetail, "====>> foodDetail")
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: '1px', border: "1px solid black" }}>
      <div style={{ display: "flex", width: '150px', height: '100px', overflow: 'hidden', alignItems: "center", marginTop: "30px" }}>
        <img width={'100%'} src={foodDetail.src} />
      </div>
      <div>
        <h4>{foodDetail.name.toUpperCase()}</h4>
        <p>{foodDetail.description}</p>
        <p>{"Remaining items is " + foodDetail.remainingItems === "0" ? "Sold Out" : foodDetail.remainingItems}</p>
      </div>

    </div>
  )
}

function Btn() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"

    }}>
      <button style={{
        backgroundColor: "#e0c56e",
        color: "black",
        padding: "20px", borderRadius: "20px", margin: "10px 0px"
      }}>ORDER NOW</button>
    </div>
  )
}