console.log("javascript.....");
key="05f9980804beebee26b5d91cce7c12cc";
const URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=05f9980804beebee26b5d91cce7c12cc"
async function checkWeather(input){
    let response=await fetch(URL+`&q=${input}`);
    if(response.status==404){
        document.querySelector(".error").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector(".footer").style.display="none";

    }
    else{

    
    document.querySelector(".container").style.display="flex";
    document.querySelector(".footer").style.display="flex";
    document.querySelector(".error").style.display="none";
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=data.main.temp+" °C";
    document.querySelector(".humidity").querySelector(".abcd").firstElementChild.innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-speed").querySelector(".abcd").firstElementChild.innerHTML=data.wind.speed+" Km/hr";
    if(data.weather[0].main=="Clouds"){
        document.querySelector(".container").firstElementChild.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector(".container").firstElementChild.src="images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".container").firstElementChild.src="images/drizzle.png"
    }

    else if(data.weather[0].main=="Mist"){
        document.querySelector(".container").firstElementChild.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector(".container").firstElementChild.src="images/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector(".container").firstElementChild.src="images/snow.png";
    }
    // console.log( document.querySelector(".container").firstElementChild.src);
}

    
}
let input=document.querySelector(".search input");
let button=document.querySelector(".search button");
button.addEventListener("click",()=>{

    console.log(input.value);
    checkWeather(input.value);
});


