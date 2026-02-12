
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

export default function OrderPage() {

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
                setFormData({
                    ...formData,
                    toppings: formData.toppings.filter(t => t !== name)
                });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    function increase() {
        setFormData({ ...formData, count: formData.count + 1 });
    }

    function decrease() {
        if (formData.count > 1) {
            setFormData({ ...formData, count: formData.count - 1 });
        }
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
            { headers: { "x-api-key": "reqres-free-v1" } }
        )
            .then(res => {
                console.log("Sipariş yanıt:", res.data);
            })
            .catch(err => {
                console.log("Hata:", err);
            });
    }

    return (
        <div className="page-wrap">
            <form onSubmit={handleSubmit} className="order-form">


                <PositionAbsolute />
                <div className="size-dough-row">
                    <div className="size-block">
                        <SelectSize
                            value={formData.size}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="dough-block">
                        <SelectDoughType
                            value={formData.dough}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <AdditionalToppings
                    list={toppingsList}
                    selected={formData.toppings}
                    onChange={handleChange}
                />

                <ClientName
                    value={formData.name}
                    onChange={handleChange}
                />

                <OrderNote
                    value={formData.note}
                    onChange={handleChange}
                />

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

            </form >
        </div>
    );
}

