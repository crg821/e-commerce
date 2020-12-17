import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

const products = [
    { id: 1, name: "Shoes", description: 'Running Shoes', price: '$5', image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 2, name: "Macbook", description: 'Some computer', price: '$1500', image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 3, name: "tshirt", description: 'Some tshirt sample here', price: '$25', image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>

    )
}

export default Products;