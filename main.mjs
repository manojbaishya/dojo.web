import * as geolocation from "./geolocation.mjs";
import * as requests from "./fetch.mjs";

import { ArrayFindLast } from "./playground.mjs";
import { Demo } from "./threed.mjs";

const getLocationBtn = document.getElementById("getLocationBtn");
getLocationBtn.addEventListener("click", () => {
    geolocation.writePosition(document.getElementById("location"));
});

requests.writeData();

ArrayFindLast();
Demo();
