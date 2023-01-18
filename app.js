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
        let daily = document.createElement('p').innerText = data['Time Series (Daily)'][currentDate]['4. close'] + '$';
        mainDiv.append(daily);
    });
}
;
function callEveryHour() {
    setInterval(stonk(), 1000 * 60 * 60 * 24);
}
callEveryHour();
let infoDiv = document.querySelector('.info-box');
infoDiv.innerHTML = "";
function stonkInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=GME&apikey=NF4D92V4LLY53NLT`);
        const data = yield response.json();
        let industry = data['Industry'];
        let description = data['Description'];
        let yearHigh = data['52WeekHigh'];
        let yearLow = data['52WeekLow'];
        infoDiv.innerHTML = `<p>GME are in the ${industry} industry </p> <br><p>${description}</p> <br><p> All time high last year was : ${yearHigh}$ ↗️ </p> <br><p> All time low last year was : ${yearLow}$ ↘️ </p> <br>`;
    });
}
;
stonkInfo();
