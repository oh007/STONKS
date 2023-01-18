const date = new Date();

let day = date.getDate()-1;
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-0${month}-${day}`;

 let mainDiv = document.querySelector('.gme-div')as HTMLHeadElement;
    mainDiv.innerHTML = ""
async function stonk(){
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=GME&apikey=NF4D92V4LLY53NLT`);
    const data =await response.json();


    
 console.log(data['Time Series (Daily)'][currentDate]['4. close']);

 let daily = document.createElement('p').innerText= data['Time Series (Daily)'][currentDate]['4. close']+'$';

 mainDiv.append(daily);

} 
stonk();