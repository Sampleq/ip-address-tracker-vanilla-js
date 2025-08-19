// console.log(document.querySelector('.attribution'));

// // https://geo.ipify.org/api/v2/country,city?apiKey=at_dsMei37c3YdPVCYMnbhgd5dIGNJ4Y&ipAddress=8.8.8.8

// fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_dsMei37c3YdPVCYMnbhgd5dIGNJ4Y&ipAddress=212.232.232.231')
//     .then(response => response.json())
//     .then(data => console.log(data));

import { validateIp, addTileLayer, getAddress, addOffset } from './helpers';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  // center: [lat, lng],
  zoom: 13,
});
let currentLat = 51.505;
let currentLng = -0.09;

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});
L.marker([currentLat, currentLng], { icon: markerIcon }).addTo(map);

addTileLayer(map);

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData(event) {
  event.preventDefault();
  // console.log(ipInput.value);

  if (!validateIp(ipInput.value)) {
    return;
  }

  // fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_dsMei37c3YdPVCYMnbhgd5dIGNJ4Y&ipAddress=${ipInput.value}`)
  //     .then(response => response.json())
  getAddress(ipInput.value).then((data) => {
    console.log(data);

    fillInfo(data);

    setMapLocation(data.location.lat, data.location.lng);
  });
}

function handleKey(event) {
  if (event.keyCode === 'Enter') {
    getData(event);
  }
}

function fillInfo(data) {
  ipInfo.innerText = data.ip;
  locationInfo.innerText = `${data.location.region}, ${data.location.city} ${data.location.postalCode}`;
  // locationInfo.innerText = (locationInfo.innerText.trim() === ',')
  //     ? '-'
  //     : locationInfo.innerText;

  if (locationInfo.innerText.trim() === ',') {
    locationInfo.innerText = '-';
  }

  timezoneInfo.innerText = data.location.timezone || '-';
  ispInfo.innerText = data.isp || '-';
}
function setMapLocation(lat, lng) {
  map.setView([lat, lng]);
  L.marker([currentLat, currentLng], { icon: markerIcon }).removeFrom(map);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);

  addOffset(map);
}

document.addEventListener('DOMContentLoaded', () => {
  getAddress('172.42.12.1').then((data) => {
    console.log(data);

    fillInfo(data);

    setMapLocation(data.location.lat, data.location.lng);
  });
});
