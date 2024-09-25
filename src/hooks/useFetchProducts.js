import { useEffect, useState } from "react";

/**
 * custom hook to fetch products from a url.
 * 
 * @param {string} url - the api endpoint to fetch products.
 * @returns {Object} - products, loading state, and error.
 */
export const useFetchProducts = (url) => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products); // set products from api data
            } catch (err) {
                // handle errors
                if (err instanceof TypeError) {
                    setError(`${err.message} : check your internet connection.`);
                } else {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false); // done loading
            }
        };

        fetchProducts();
    }, [url]); // run effect when url changes

    return { products, isloading, error }; // return products, loading, and error
};
