import * as geolocation from "./geolocation.mjs";
import * as requests from "./fetch.mjs";
import * as regex from './regex.mjs';

requests.writeData();

import { ArrayFindLast } from "./playground.mjs";
import { Demo } from "./threed.mjs";

const getLocationBtn = document.getElementById("getLocationBtn");
getLocationBtn.addEventListener("click", () => {
    geolocation.writePosition(document.getElementById("location"));
});

requests.writeData();
const testEmailRegexBtn = document.getElementById("testEmailRegexBtn");
testEmailRegexBtn.addEventListener("click", () => {
    regex.TestEmailRegex();
})

ArrayFindLast();
Demo();
