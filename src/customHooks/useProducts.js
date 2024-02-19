import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProductsToStore } from "../redux/slice/productSlice";
import { useEffect } from "react";

function useProducts() {
    const productsFromStore = useSelector((state) => state.productReducer.list);

    const dispatch = useDispatch();

    const fetchProductsFromAPi = async() => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");

            dispatch(setProductsToStore(response.data));
        } catch (error) {
            // dispatch(setProductsToStore(null));
        }
    };

    useEffect(() => {
        if (!productsFromStore) {
            fetchProductsFromAPi();
        }
    }, [productsFromStore]);

    return {
        products: productsFromStore,
    };
}

export default useProducts;