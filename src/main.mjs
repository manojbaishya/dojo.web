import * as geolocation from "./geolocation.mjs";
import * as requests from "./fetch.mjs";
import * as regex from './regex.mjs';
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

// Three.js Demo
Demo();

// Web Workers

let worker;
const workerHook = document.getElementById("workerHook")
const startWorker = document.getElementById("startWorker");
startWorker.addEventListener('click', function (event) {
    worker = new Worker("/src/worker.mjs", { type: "module" });

    console.log(`Received event: ${event}`);

    worker.postMessage({
        type: "calculate",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });

    worker.onmessage = (event) => {
        const { type, data } = event.data;
        if (type === 'result') {
            workerHook.innerHTML = data;
            console.log('Result from worker:', data);
        }
    };
});

const stopWorker = document.getElementById("stopWorker");
stopWorker.addEventListener('click', function (event) {
    console.log(`Received event: ${event}`);
    worker.terminate();
});