        const apiKey="e883334699c83f20c0482a8a3eaefa2d";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const icon=document.querySelector(".weather-icon");

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        });

        async function checkWeather(city){
            const res=await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(res.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
                return;
            }
            else{
                var data=await res.json();

                console.log(data);
                document.querySelector(".city").innerHTML=data.name;  
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
                document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
                document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";  

                if(data.weather[0].main=="Clouds"){
                        icon.src="images/clouds.png";
                }
                else if(data.weather[0].main=="Clear"){
                        icon.src="images/clear.png";
                }
                else if(data.weather[0].main=="Rain"){
                        icon.src="images/rain.png";
                }
                else if(data.weather[0].main=="Drizzle"){
                        icon.src="images/drizzle.png";
                }
                else if(data.weather[0].main=="Mist"){
                        icon.src="images/mist.png";
                }
            }
        }