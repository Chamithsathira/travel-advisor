import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlaceData = async (sw, ne) => {
    try {
        const {data : {data}} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'eb6a26b801mshf0066176830863ap1f20d0jsn58a1d702d5b5'
              }
        });

        return data;

    } catch (error) {
        console.log(error);
    }
}