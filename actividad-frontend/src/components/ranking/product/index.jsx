import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"
import "./style.css"

const productsRank = [
    {
        "id": 1,
        "name": "Pantalones vaqueros",
        "price": 39.95,
        "category": "Pants",
        "imageUrl": "/assets/products/pant_a.jpg",
        "rank": 0,
        "score": 0
    },
    {
        "id": 2,
        "name": "Vestido",
        "price": 39.95,
        "category": "Pants",
        "imageUrl": "/assets/products/dress_a.jpg",
        "rank": 0,
        "score": 0
    },
    {
        "id": 3,
        "name": "Chaqueta",
        "price": 39.95,
        "category": "Pants",
        "imageUrl": "/assets/products/jacket_a.jpg",
        "rank": 0,
        "score": 0
    },
    {
        "id": 4,
        "name": "Chaqueta blanca",
        "price": 39.95,
        "category": "Pants",
        "imageUrl": "/assets/products/jacket_b.jpg",
        "rank": 0,
        "score": 0
    },
    {
        "id": 5,
        "name": "Pantalones",
        "price": 39.95,
        "category": "Pants",
        "imageUrl": "/assets/products/pant_c.jpg",
        "rank": 0,
        "score": 0
    },
    {
        "id": 6,
        "name": "Jersey",
        "price": 39.95,
        "category": "Pants",
        "imageUrl": "/assets/products/sweater_a.jpg",
        "rank": 0,
        "score": 0
    }
]

export const Products = () => {
    return (
        <div className="products">
            {productsRank.map((product) => (
                <Card maxW='sm'>
                <CardBody>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))
            }
        </div>
    )
}