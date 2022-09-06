//Get all the countries from the Asia continent/region using the Filter function
let xhr=new XMLHttpRequest()
xhr.open('GET',"https://restcountries.com/v2/all")
xhr.onload=function(){
if(xhr.status>=200 && xhr.status<300){
    let data=JSON.parse(this.response)
    let asia=data.filter((ele)=>{
        return ele.region==="Asia"
    })
    console.log(asia)
}
else{
    console.log("No data")
}
};
xhr.send();