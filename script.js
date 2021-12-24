'use strict';

let xhr = new XMLHttpRequest();


xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function(){
    if (xhr.status >=200 && xhr.status<300){
        let data = JSON.parse(this.responseText);
     console.log(data);
      console.log(data[0].population);
    //  a.
     let region= data.filter(country=>{
         return country.region === "Asia";
     })
     console.log(region);

     // b.
    let population = data.filter(country=>{
        return country.population < 200000;
    })
    console.log(population);
     // c.
    data.forEach(data => {
         console.log(`
         Name : ${data.name} 
         Capital : ${data.capital}
         Flag : ${data.flag}`);  
    });
 
    // d.
    let totalPopulation= [];
    data.forEach(data=>{
        totalPopulation.push(data.population);
    
    })
    let sumPopulation = totalPopulation.reduce((acc,current)=>{
        return acc + current;
    });

    console.log(sumPopulation);

    // e.
    let oneCountry = data.filter(country =>{
        if (country.currencies[0].name ==="United States dollar"){
            return country.name;
        }
    });
    console.log(oneCountry)



    }

   

   
}

xhr.send( );
