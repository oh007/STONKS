"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const date = new Date();
let day = date.getDate() - 1;
let month = date.getMonth() + 1;
let year = date.getFullYear();
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-0${month}-${day}`;
let mainDiv = document.querySelector('.gme-div');
mainDiv.innerHTML = "";
function stonk() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=GME&apikey=NF4D92V4LLY53NLT`);
        const data = yield response.json();
        console.log(data['Time Series (Daily)'][currentDate]['4. close']);
        let daily = document.createElement('p').innerText = data['Time Series (Daily)'][currentDate]['4. close'] + '$';
        mainDiv.append(daily);
    });
}
stonk();
