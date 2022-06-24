const fetch = require('node-fetch');

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json'
});

const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

async function teste() {
  const result = await fetch('https://postman-echo.com/post?param1=teste', {
    headers,
    method: 'POST',
    body,
  });
  data = await result.json();
  console.log(data);
}

teste();