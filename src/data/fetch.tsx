import { TRestaurantDetails, TRestaurantsResponse } from "@/types/Restaurant";





export const options = {
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
    },
};

export const getAllRestaurants = async (page: number, category: string): Promise<TRestaurantsResponse> => {
    const url = `https://${
        import.meta.env.VITE_API_HOST
    }/restaurants/list?location_id=293919&&currency=USD&limit=8&offset=${(page - 1) * 8}&restaurant_tagcategory=${
        category.length > 0 ? category : 'all'
    }`;

    const response = await fetch(url, {
        method: 'GET',
        cache: 'force-cache',
        ...options,
    });
    const result = await response.json();
    return result;
};

export const getRestaurantDetails = async (id: string): Promise<TRestaurantDetails> => {
    const url = `https://${import.meta.env.VITE_API_HOST}/restaurants/get-details?location_id=${id}`;

    const response = await fetch(url, {
        method: 'GET',
        cache: 'force-cache',
        ...options,
    });
    const result = await response.json();
    return result;
};