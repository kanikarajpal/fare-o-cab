'use strict';

const bing_key =
  'Ap50P6W8lZQfCIxxv1bTh0r2htetOojglwdIFqnnNVWZcDcbik-K8XSyom5pW89s';
const toll_guru = 'LDgnHdrHf3r3tRJ49D79m2bRgdFj2t7Q';
let category = 'Prime';


function setCategory(val) {
  category = val;
}

function displayRes(distObj) {
  const resources = distObj.resourceSets[0].resources[0];
  const routeLegs = resources.routeLegs[0];

  console.log('status code. - ', distObj.statusCode);
  console.log('Starts at', routeLegs.actualStart.coordinates);
  console.log('Ends at', routeLegs.actualEnd.coordinates);

  document.querySelector(
    '.distance'
  ).textContent = `Distance - ${routeLegs.travelDistance} Kms`;

  document.querySelector('.duration').textContent = `Duration - ${
    routeLegs.travelDuration / 60
  } Mins`;

  document.querySelector(
    '.traffic'
  ).textContent = `Traffic - ${resources.trafficCongestion}`;

  document.querySelector('.toll ').textContent = `Toll - ${0}`;
  document.querySelector('.price').textContent = `Total Cab Cost - ${0}`;
  document.querySelector('.category ').textContent = `Catergoey - ${category}`;


  routeLegs.itineraryItems.forEach((item) => {
    const dirc = document.createElement('div');
    dirc.classList.add('subsec');
    dirc.textContent = `${item.instruction.text} and stay on this path for - ${
      item.travelDistance * 1000
    } meters`;

    const box = document.querySelector('.sec3');
    box.appendChild(dirc);
  });
}
async function submitHandle() {
  const from = encodeURI(document.getElementById('pickup_loc').value);
  const to = encodeURI(document.getElementById('destination').value);
  document.querySelector('.price').scrollIntoView();

  const url = `http://dev.virtualearth.net/REST/V1/Routes?wp.0=${from}&wp.1=${to}&optmz=timeWithTraffic&key=${bing_key}`;

  // process the toll and the category here, and send it to python.

  const distObj = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  displayRes(distObj);
}

// The code up here will fetch us the cordinates of the location that the user will input. Launch the same shit with to and from
// Docs - https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/find-a-location-by-query
// Thought I could add - https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/local-search local search The Bing Maps Local Search API returns a list of business entities centered around a location or a geographic region. But it just works on US addresses
