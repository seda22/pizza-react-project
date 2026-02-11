
import { useState } from "react"
import CardGrid from "./components/CardGrid"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import NavButtons from "./components/NavButtons"
import OrderPage from "./OrderPage"
import FakeDataList from "../FakeDataList"
import FakeDataMenuList from "../FakeDataMenuList"


export default function App (){
  const[selectedPage, setSelectedPage] = useState("PizzaWorld");
  const [orderData, setOrderData] = useState(null);


  return(
    
    <>
  
    {/*Ternary if tanımladık. Ana sayfadaysa neler gösterecek orderpagedeyse neler gösterecek. */}
    {selectedPage === "PizzaWorld"? (
      <><Header setSelectedPage={setSelectedPage}/> {/*prop olarak setSelectedPAge fomksiyonunu Header componentine yolladık. */}
    <NavButtons FakeDataList={FakeDataList}/>
    <CardGrid setSelectedPage={setSelectedPage}/> {/*prop olarak setSelectedPAge fomksiyonunu Header componentine yolladık. */}
    <Menu FakeDataMenuList={FakeDataMenuList}/></>
    ): (<><OrderPage setSelectedPage={setSelectedPage} setOrderData={setOrderData}/></>)} {/*prop olarak setSelectedPAge fomksiyonunu Header componentine yolladık. */}

    <Footer/>
    </>
  )
}




