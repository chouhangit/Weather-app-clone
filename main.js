const form=document.querySelector("form")
const input=document.querySelector("input")
const button=document.querySelector("button")
const h2 = document.querySelector("h2")
const h4 = document.querySelector("h4")
const img = document.querySelector("img")

form.addEventListener("submit",getdata)
async function getdata(e){
    e.preventDefault()
    // let name=input.value
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=30727f1ece8c408fa0260647232002&q=${input.value}&aqi=yes`)
    const data = await res.json();
    const location = data.location.name;
    const temprature = data.current.temp_c;
    const icon = data.current.condition.icon;
    h2.innerText = temprature;
    h4.innerText = location;
    img.setAttribute("src" , `https:${icon}`)
    console.log(data)
    form.reset()
}


