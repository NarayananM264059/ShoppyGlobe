import { useEffect, useState } from "react";

/**
 * @param {string} url - the api endpoint to fetch the product.
 * @param {number} id - the id of the product to fetch.
 * @returns {Object} - product data, loading state, and error.
 */
export const useFetchSingleProduct = (url, id = null) => {
    const [product, setProduct] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${url}${id}`);
                if (!response.ok) {
                    throw new Error('failed to fetch product');
                }
                const data = await response.json();
                // set product data from api response
                setProduct(data); 
            } catch (err) {
                // handle errors
                if (err instanceof TypeError) {
                    setError(`${err.message} : check your internet connection.`);
                } else {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [url, id]); 

    return { product, isloading, error }; 
};
