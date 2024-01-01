const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl = import.meta.env.VITE_WEATHER_API_URL; 

export let getData = async (city)=>{
    let res = await fetch(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`);
    let jres = await res.json();
    let result = {
        city:city,
        temp:jres.main.temp,
        humidity:jres.main.humidity,
        feels_like:jres.main.feels_like,
        temp_min:jres.main.temp_min,
        temp_max:jres.main.temp_max,
        pressure:jres.main.pressure,
        weather:jres.weather[0].description
        
    }
    return result;
}
 