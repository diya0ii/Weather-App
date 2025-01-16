import requests

api_key = '7621b01576c4cb350d9f5d742c82c025'

def get_weather(city):
    try:
        response = requests.get(
            f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        )
        weather_data = response.json()

        if weather_data.get('cod') == '404':
            return {"error": "City not found"}
        else:
            weather = weather_data['weather'][0]['main']
            temp = round(weather_data['main']['temp'])
        
        return {
            "city": city,
            "weather": weather,
            "temperature": f"{temp} degree C"
        }
    
    except Exception as e:
        return {"error": str(e)}
