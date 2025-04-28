

interface Product { 
    name: string; 
    price:number;
    description: string; 
    stock: number; 
    images: string; 
    category: string; 
}

export const addindProperties = ( product: Product) => {
    const id = Math.floor(Math.random() * 1000000);
    const avaliable = true; 
    const slug = product.name.replace(' ', '-').toLowerCase();

    return { ...product, id, avaliable, slug };
} 