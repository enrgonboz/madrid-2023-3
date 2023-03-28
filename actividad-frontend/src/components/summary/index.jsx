import { StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react"
import "./style.css"

const summary = {
    "totalProducts": 6,
    "totalOrders": 6,
    "totalSales": 6000.95,
    "totalProductsByCategory": [
      {
        "category": "Pants",
        "productsCount": 6
      }
    ]
  }

export const Summary = () => {
    return (
        <div className="container_summary">
        <StatGroup>
            <Stat className="stat">
                <StatLabel>Pedidos</StatLabel>
                <StatNumber>{summary.totalOrders}</StatNumber>
            </Stat>
            <Stat className="stat">
                <StatLabel>Unidades</StatLabel>
                <StatNumber>{summary.totalProducts}</StatNumber>
            </Stat>
            <Stat className="stat">
                <StatLabel>Importe</StatLabel>
                <StatNumber>{summary.totalSales}</StatNumber>
            </Stat>
        </StatGroup>
        </div>
    )
}