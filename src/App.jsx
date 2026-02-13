
import { useState } from "react"
import CardGrid from "./components/CardGrid"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import NavButtons from "./components/NavButtons"
import OrderPage from "./OrderPage"
import FakeDataList from "../FakeDataList"
import FakeDataMenuList from "../FakeDataMenuList"
import SuccessPage from "./components/SuccessPage"



export default function App (){
  const[selectedPage, setSelectedPage] = useState("PizzaWorld");
  const [orderData, setOrderData] = useState(null); {/*Sipariş bilgisini state olarak saklayacağım. Henüz sepet boş olduğu için null olarak tanımlandı başlangıç değeri. */}

  return(
    
    <>
  
    {selectedPage === "PizzaWorld" && (
        <>
          <Header setSelectedPage={setSelectedPage}/>
          <NavButtons FakeDataList={FakeDataList}/>
          <CardGrid setSelectedPage={setSelectedPage}/>
          <Menu FakeDataMenuList={FakeDataMenuList}/>
        </>
      )}

      {selectedPage === "OrderPages" && (
        <OrderPage
          setSelectedPage={setSelectedPage}
          setOrderData={setOrderData}
        />
      )}

      {selectedPage === "success" && (
        <SuccessPage orderData={orderData}/>
      )}

      <Footer/>
    </>
  )
}




