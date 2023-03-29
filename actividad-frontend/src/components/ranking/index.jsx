import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Products } from "./product";
import "./style.css"

const TYPES = [
    { value: "orders", label: "Ordenes" },
    { value: "units", label: "Unidades" },
    { value: "amount", label: "Total" }
];

export const Ranking = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <div className="container_ranking">
                <div>
                    <strong>RANKING</strong>
                </div>
                <div className="selector_ranking">
                    <div>
                    <h4>Tipos</h4>
                    <Select size="xs">
                        {TYPES.map((type) => (
                            <option value={type.value}>{type.label}</option>
                        ))}
                    </Select>
                    </div>
                    <div>
                    <h4>Fecha Inicio</h4>
                    <SingleDatepicker
                        name="date-input"
                        date={date}
                        onDateChange={setDate}
                    />
                    </div>
                    <div>
                    <h4>Fecha Fin</h4>
                    <SingleDatepicker
                        name="date-input"
                        date={date}
                        onDateChange={setDate}
                    />
                    </div>
                </div>
            </div>
            <Products />
        </div>

    )
}