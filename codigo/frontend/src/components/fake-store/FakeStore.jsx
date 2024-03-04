import { useEffect, useState } from 'react';
import './FakeStore.css'

function FakeStore() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const controller = new AbortController();
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal: controller.signal,
            };

            try {
                const response = await fetch('https://fakestoreapi.com/products', options);
                const data = await response.json();
                setProducts(data); // Corrected line
            } catch (error) {
                console.log(error);
            } finally {
                controller.abort();
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>FakeStore</h1>
            <ul>
                {products.map((product) => (
                    <li className='listafakestore' key={product.id} >
                        <div><img className='imagenfakestore' src={product.image} alt="" /></div>
                        <div className='infofakestore'>
                            <span className='fakestoretitle'>{product.title}</span>
                            <strong className='fakestoredescription'>Description: {product.description}</strong>
                            <strong className='fakestoreprice'>Price: {product.price}$</strong>
                            <p className="fakestorecategory">Category: {product.category}</p>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FakeStore;
