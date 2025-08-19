import L from 'leaflet'

export function addTileLayer(map) {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '    Challenge by <a href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0" target="_blank">Frontend Mentor</a>. Coded by <a target="_blank" href="https://github.com/Sampleq">Sampleq</a> Igor M.',
  }).addTo(map);
}
