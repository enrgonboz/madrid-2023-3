import { Table, TableContainer, Thead, Tr, Th, Tbody, Td} from "@chakra-ui/react"

const orders = [
    {
        "id": 1,
        "date": "2023-02-15T17:32:28Z",
        "status": "approved",
        "total": 1000.95,
    },
    {
        "id": 2,
        "date": "2023-02-15T17:32:28Z",
        "status": "approved",
        "total": 342.54,
    },
    {
        "id": 3,
        "date": "2023-02-15T17:32:28Z",
        "status": "approved",
        "total": 202.5,
    },
    {
        "id": 4,
        "date": "2023-02-15T17:32:28Z",
        "status": "approved",
        "total": 1020.2,
    },
]

export const Orders = () => {
    return (
        <TableContainer>
            <Table variant='unstyled'>
                <Thead>
                    <Tr>
                        <Th>Fecha</Th>
                        <Th>Estado</Th>
                        <Th>Unidades</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {orders.map((order) => (
                        <Tr>
                            <Td >{order.date}</Td>
                            <Td>{order.status}</Td>
                            <Td isNumeric>{order.id}</Td>
                            <Td isNumeric>{order.total}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}