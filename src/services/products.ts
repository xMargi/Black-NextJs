// src/services/products.ts

export type ProductType = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    inStock: number
  }
  
  export const fetchProducts = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/products`;
    console.log('Fetching from URL:', apiUrl);
    
    const response = await fetch(apiUrl);
    console.log('Response:', response); // Veja o que está sendo retornado
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const products: ProductType[] = await response.json();
    return products;
  };
  
  export const fetchProduct = async (id: string | number) => {
    const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`).then(res => res.json())
    return product
  }