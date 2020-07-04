// Import stylesheets
import './style.css';
//import axios from axios;

// Write Javascript code!
// var request = require('request');
// var cheerio = require('cheerio');
// request('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });
async(event, steps)=>
{
const axios = require("axios");
const cheerio = require("cheerio");

async function fetchHTML(url) {
  const { data } = await axios.get(url)
  return cheerio.load(data)
}

const $ = await fetchHTML("https://example.com")

// Print the full HTML
console.log(`Site HTML: ${$.html()}\n\n`)

// Print some specific page content
console.log(`First h1 tag: ${$('h1').text()}`)
}
// Store the full HTML as a property of $event so we can 
// use it in later steps. See
// https://docs.pipedream.com/notebook/dollar-event/#modifying-event

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;