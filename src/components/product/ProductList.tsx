import { IProduct } from '@/interfaces';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

interface Props {
  products: IProduct[];
}

const ProductList = ({ products }: Props) => (
  <Grid container spacing={4}>
    {products.map((product) => (
      <ProductCard key={product.slug} product={product} />
    ))}
  </Grid>
);

export default ProductList;
