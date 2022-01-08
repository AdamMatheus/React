import axios from 'axios';
import { setLoadingFalseAction, setLoadingTrueAction } from '../actions/appActions';
import { setNewsListAction } from '../actions/newsActions';

export const getNewsThunk = () => async (dispatch, getState) => {
    try {
        dispatch(setLoadingTrueAction());
        const response = await axios.get('https://bing-news-search1.p.rapidapi.com/news', {
            params: {safeSearch: 'Off', textFormat: 'Raw'},
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': 'db151142f9msh27a5b67f927d75fp1ac147jsn507b38ce1e98'
            }
        });
        dispatch(setNewsListAction(response.data.value));
        console.log(response.data.value)

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoadingFalseAction());
    }
}