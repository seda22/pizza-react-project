
import logo from "/assets/iteration-1/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import AdditionalToppings from "./components/order-components/AdditionalToppings";
import ClientName from "./components/order-components/ClientName";
import OrderCount from "./components/order-components/OrderCount";
import OrderNote from "./components/order-components/OrderNote";
import PositionAbsolute from "./components/order-components/PositionAbsolute";
import SelectDoughType from "./components/order-components/SelectDoughType";
import SelectSize from "./components/order-components/SelectSize";
import SummaryBox from "./components/order-components/SummaryBox";
import FakeToppingsList from "../FakeToppingList";
import styled from "styled-components";


const HeaderContentDiv = styled.div`
background-color: #ce2829;
  display: flex;           
  flex-direction: column; 
  align-items: center;     
  justify-content: center; 
  padding: 60px 0 40px;        
  width: 100%;
`

const SelectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 40px auto;
  width: 100%;
  max-width:532px;
min-width:532px;
`;

const OrderBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 532px;
  margin: 0 auto;
  gap: 20px;
`;



export default function OrderPage({ setSelectedPage, setOrderData }) {

    const [toppingsList, setToppingsList] = useState(FakeToppingsList);

    const [formData, setFormData] = useState({
        size: "",
        dough: "",
        note: "",
        name: "",
        count: 1,
        toppings: [],
    });


    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                if (formData.toppings.length < 10) {
                    setFormData(prev => ({
                        ...prev,
                        toppings: [...prev.toppings, name]
                    }));

                }
            } else {
                setFormData(prev => ({
                    ...prev,
                    toppings: prev.toppings.filter(t => t !== name)
                }));
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    function increase() {
        setFormData(prev => ({
            ...prev,
            count: prev.count + 1
        }));
    }


    function decrease() {
        setFormData(prev => ({
            ...prev,
            count: Math.max(1, prev.count - 1)
        }));
    }


    const toppingsPrice = formData.toppings.length * 5;
    const total = (85.5 + toppingsPrice) * formData.count;

    const nameValid = formData.name.trim().length >= 3;

    const isInvalid =
        formData.toppings.length < 4 ||
        !formData.size ||
        !formData.dough ||
        !nameValid;

    function handleSubmit(e) {
  e.preventDefault();

  if (isInvalid) return;

  axios.post(
    "https://reqres.in/api/pizza",
    formData,
    {
      headers: {
        "x-api-key": "reqres_a15760cffac94bde8fb347eece65ae2f"
      }
    }
  )
  .then(res => {
    console.log("API OK", res.data);
    setOrderData({
    ...formData,
    toppingsPrice,
    total
  });;
    setSelectedPage("success");
  })
  .catch(err => {
    console.log("API FAIL", err?.response?.status);

    // challenge fallback
    setOrderData({
    ...formData,
    toppingsPrice,
    total,
    mock: true
  });

    setSelectedPage("success");
  });
}



return (
    <div>
        <div >
            <HeaderContentDiv >
                <img src={logo} alt="Teknolojik Yemekler" />
            </HeaderContentDiv>
        </div>
        <form onSubmit={handleSubmit} >
            <PositionAbsolute />
            <SelectionRow>
                <SelectSize value={formData.size} onChange={handleChange} />
                <SelectDoughType value={formData.dough} onChange={handleChange} />
            </SelectionRow>
            <AdditionalToppings
                list={toppingsList}
                selected={formData.toppings}
                onChange={handleChange}
                maxReached={formData.toppings.length >= 10}
            />

            <ClientName
                value={formData.name}
                onChange={handleChange}
            />

            <OrderNote
                value={formData.note}
                onChange={handleChange}
            />
            <OrderBottomRow>
                <OrderCount
                    count={formData.count}
                    increase={increase}
                    decrease={decrease}
                />

                <SummaryBox
                    toppingsPrice={toppingsPrice}
                    total={total}
                    disabled={isInvalid}
                />
            </OrderBottomRow>
        </form >
    </div>
);

}
