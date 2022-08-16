const API_KEY = "5b4b7aac1d593cfae4a3ebd879676293";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

const getWeather = async (city) =>{
    const http = new slhttp();
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    try{
        const res = await http.get(url);

        return{
            state: 'success',
            weatherInfo: res
        };
    } catch(e) {
        return{
            state: 'error',
            weatherInfo: null
        };
    }
}
getWeather("goa").then(res=>console.log(res)).catch(err=>console.log(err));