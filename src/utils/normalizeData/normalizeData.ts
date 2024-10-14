type AttractionsData = {
    location_id: string;
    name: string;
    latitude: string;
    longitude: string;
    num_reviews: string;
    rating: string;
    photo: {
        images: {
        large: {
            url: string;
        };
        };
    };
    subcategory?: {
        name: string;
    }[];
};


type CountryData = {
    imageUrl: string;
    title: string;
    rating?: string;  
    num_reviews?: string; 
    subcategory?: string;
};

type NormalizedItem = {
    imageUrl: string;
    title: string;
    rating?: string;
    num_reviews?: string;
    subcategory?: string;
  };

export const normalizeCountryData = (data: CountryData[]): NormalizedItem[] => {
    return data
        .filter(item => item.title !== '')
        .map((item: CountryData) => ({
            imageUrl: item.imageUrl,
            title: item.title || '',
            rating: item.rating || '', 
            num_reviews: item.num_reviews || '',
            subcategory: item.subcategory || '',
    }));
}

export const normalizeAttractionData = (data: AttractionsData[]): NormalizedItem[] => {
    return data.map((item: AttractionsData) => ({
        imageUrl: item.photo?.images?.large?.url || '',
        title: item.name || '',
        rating: item.rating || '',
        num_reviews: item.num_reviews || '',
        subcategory: item.subcategory ? item.subcategory[0]?.name : ''
    }))
}