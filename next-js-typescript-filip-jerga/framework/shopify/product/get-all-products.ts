export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchApi = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: Data[] = await res.json();
  return { data };
};

const getAllProducts = async (): Promise<Data[]> => {
  const products = await fetchApi();
  return products.data;
};

export default getAllProducts;
