import * as geolocation from "./geolocation.mjs";
import * as requests from "./fetch.mjs";
import * as regex from './regex.mjs';

requests.writeData();

const getLocationBtn = document.getElementById("getLocationBtn");
getLocationBtn.addEventListener("click", () => {
    geolocation.writePosition(document.getElementById("location"));
});

const testEmailRegexBtn = document.getElementById("testEmailRegexBtn");
testEmailRegexBtn.addEventListener("click", () => {
    regex.TestEmailRegex();
})

