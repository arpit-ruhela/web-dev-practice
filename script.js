var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        trophy: 5,
        captain: "RUTURAJ",
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        trophy: 5,
        captain: "RAJAT PATIDAR",
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        trophy: 5,
        captain: "HARDIK PANDYA",
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        trophy: 2,
        captain: "AJINKYA RAHANE",
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        trophy: 1,
        captain: "PET COMINS",
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'gold',
        trophy: 0,
        captain: "SHERYAS IYER",
    },
    {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        trophy: 0,
        captain: "KL RAHUL",
    },
    {
        team: 'LSG',
        primary: 'skyblue',
        secondary: 'red',
        trophy: 0,
        captain: "RISHAB PANT",
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'darkblue',
        trophy: 1,
        captain: "SENJAU SEMSON",
    },
    {
        team: 'GT',
        primary: 'darkblue',
        secondary: 'gold',
        trophy: 1,
        captain: "SHUBMAN GILL",
    },
]
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var h3 = document.querySelector("h3")
var main = document.querySelector(".main")
var button = document.querySelector("button")

button.addEventListener("click", function(){

  var winner = arr [Math.floor( Math.random()*arr.length)]

  h1.innerHTML = winner.team
  h2.innerHTML = winner.captain
  h3.innerHTML = winner.trophy

  main.style.backgroundColor = winner.primary
  h1.style.backgroundColor = winner.secondary
})