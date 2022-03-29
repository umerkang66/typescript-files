import type { InferGetStaticPropsType, NextPage } from 'next';
import getAllProducts, {
  Data,
} from '../framework/shopify/product/get-all-products';

// This function runs on the server
export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    // In every 4 hours, build this static page again
    revalidate: 4 * 60 * 60 * 1000,
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  const render = (): JSX.Element[] => {
    return products.map(
      (product: Data): JSX.Element => <li key={product.id}>{product.title}</li>
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>{render()}</ul>
    </div>
  );
};

export default Home;
