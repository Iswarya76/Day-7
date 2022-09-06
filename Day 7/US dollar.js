//Print the country which uses US Dollars as currency
let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://restcountries.com/v2/all");
xhr4.onload = function () {
  if (xhr4.status >= 200 && xhr4.status < 300) {
    let data = JSON.parse(this.response);
    let nexval = [];
    for (let i = 0; i < data.length; i++) {
      let y = data[i].currencies;
      if (y !== undefined) {
        for(let j=0;j<y.length;j++){
            if(y[j].symbol==="$"){
                nexval.push(data[i])
            }
        }
      }
    }
   console.log(nexval);
  } else {
    console.log("No data");
  }
};
xhr4.send();