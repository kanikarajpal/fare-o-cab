'use strict';

const bing_key =
  'Ap50P6W8lZQfCIxxv1bTh0r2htetOojglwdIFqnnNVWZcDcbik-K8XSyom5pW89s';
  
const toll_guru = 'LDgnHdrHf3r3tRJ49D79m2bRgdFj2t7Q';

const from = 'Mandir Marg, Baldev Park, Krishna Nagar, Delhi, 110051';

let to =
  'E-60 Vikas Marg Veer Savarkar Block Block G Laxmi Nagar New Delhi Delhi 110092';
let processed_to = to.split(' ').join('%20');

// const example = '1%20Microsoft%20Way%20Redmond%20WA%2098052';

const bing_get_location_url = `http://dev.virtualearth.net/REST/v1/Locations/${to}?&key=${bing_key}`;

const result_to = {
  authenticationResultCode: 'ValidCredentials',
  brandLogoUri: 'http://dev.virtualearth.net/Branding/logo_powered_by.png',
  copyright:
    'Copyright © 2022 Microsoft and its suppliers. All rights reserved. This API cannot be accessed and the content and any results may not be used, reproduced or transmitted in any manner without express written permission from Microsoft Corporation.',
  resourceSets: [
    {
      estimatedTotal: 5,
      resources: [
        {
          __type:
            'Location:http://schemas.microsoft.com/search/local/ws/rest/v1',
          bbox: [
            28.630063082484725, 77.276683622685056, 28.637788517626078,
            77.28841907712274,
          ],
          name: 'Vikas Marg, Laxmi Nagar, New Delhi, Delhi-110092, India',
          point: {
            type: 'Point',
            coordinates: [28.6339258, 77.28255135],
          },
          address: {
            addressLine: 'Vikas Marg',
            adminDistrict: 'Delhi',
            countryRegion: 'India',
            formattedAddress:
              'Vikas Marg, Laxmi Nagar, New Delhi, Delhi-110092, India',
            locality: 'New Delhi',
            postalCode: '110092',
          },
          confidence: 'Medium',
          entityType: 'RoadBlock',
          geocodePoints: [
            {
              type: 'Point',
              coordinates: [28.6339258, 77.28255135],
              calculationMethod: 'Interpolation',
              usageTypes: ['Display'],
            },
          ],
          matchCodes: ['Ambiguous', 'UpHierarchy'],
        },
        {
          __type:
            'Location:http://schemas.microsoft.com/search/local/ws/rest/v1',
          bbox: [
            28.630945796036524, 77.278038690235164, 28.638671231177877,
            77.28977424337323,
          ],
          name: 'Vikas Marg, Laxmi Nagar, New Delhi, Delhi-110092, India',
          point: {
            type: 'Point',
            coordinates: [28.63480851, 77.28390647],
          },
          address: {
            addressLine: 'Vikas Marg',
            adminDistrict: 'Delhi',
            adminDistrict2: 'New Delhi',
            countryRegion: 'India',
            formattedAddress:
              'Vikas Marg, Laxmi Nagar, New Delhi, Delhi-110092, India',
            locality: 'New Delhi',
            postalCode: '110092',
          },
          confidence: 'Medium',
          entityType: 'RoadBlock',
          geocodePoints: [
            {
              type: 'Point',
              coordinates: [28.63480851, 77.28390647],
              calculationMethod: 'Interpolation',
              usageTypes: ['Display'],
            },
          ],
          matchCodes: ['Ambiguous', 'UpHierarchy'],
        },
        {
          __type:
            'Location:http://schemas.microsoft.com/search/local/ws/rest/v1',
          bbox: [
            28.631468047558123, 77.27898961926482, 28.639193482699476,
            77.290725230800376,
          ],
          name: 'Vikas Marg, Veer Savarkar Block, New Delhi, Delhi-110092, India',
          point: {
            type: 'Point',
            coordinates: [28.63533077, 77.28485743],
          },
          address: {
            addressLine: 'Vikas Marg',
            adminDistrict: 'Delhi',
            adminDistrict2: 'New Delhi',
            countryRegion: 'India',
            formattedAddress:
              'Vikas Marg, Veer Savarkar Block, New Delhi, Delhi-110092, India',
            locality: 'New Delhi',
            postalCode: '110092',
          },
          confidence: 'Medium',
          entityType: 'RoadBlock',
          geocodePoints: [
            {
              type: 'Point',
              coordinates: [28.63533077, 77.28485743],
              calculationMethod: 'Interpolation',
              usageTypes: ['Display'],
            },
          ],
          matchCodes: ['Ambiguous', 'UpHierarchy'],
        },
        {
          __type:
            'Location:http://schemas.microsoft.com/search/local/ws/rest/v1',
          bbox: [
            28.632567916791725, 77.280617443298084, 28.640293351933078,
            77.292353177824722,
          ],
          name: 'Vikas Marg, New Delhi, Delhi-110092, India',
          point: {
            type: 'Point',
            coordinates: [28.63643063, 77.28648531],
          },
          address: {
            addressLine: 'Vikas Marg',
            adminDistrict: 'Delhi',
            adminDistrict2: 'New Delhi',
            countryRegion: 'India',
            formattedAddress: 'Vikas Marg, New Delhi, Delhi-110092, India',
            locality: 'New Delhi',
            postalCode: '110092',
          },
          confidence: 'Medium',
          entityType: 'RoadBlock',
          geocodePoints: [
            {
              type: 'Point',
              coordinates: [28.63643063, 77.28648531],
              calculationMethod: 'Interpolation',
              usageTypes: ['Display'],
            },
          ],
          matchCodes: ['Ambiguous', 'UpHierarchy'],
        },
        {
          __type:
            'Location:http://schemas.microsoft.com/search/local/ws/rest/v1',
          bbox: [
            28.628931183122223, 77.274990234857512, 28.636656618263576,
            77.2867255627387,
          ],
          name: 'Vikas Marg, New Delhi, Delhi-110092, India',
          point: {
            type: 'Point',
            coordinates: [28.6327939, 77.2808579],
          },
          address: {
            addressLine: 'Vikas Marg',
            adminDistrict: 'Delhi',
            countryRegion: 'India',
            formattedAddress: 'Vikas Marg, New Delhi, Delhi-110092, India',
            locality: 'New Delhi',
            postalCode: '110092',
          },
          confidence: 'Medium',
          entityType: 'RoadBlock',
          geocodePoints: [
            {
              type: 'Point',
              coordinates: [28.6327939, 77.2808579],
              calculationMethod: 'Interpolation',
              usageTypes: ['Display'],
            },
          ],
          matchCodes: ['Ambiguous', 'UpHierarchy'],
        },
      ],
    },
  ],
  statusCode: 200,
  statusDescription: 'OK',
  traceId:
    '78a1ad616f164645b6fcba91ec228f58|PUS0004C6A|0.0.0.1|Ref A: 02A00924C4294970B9DF9680F3CE6084 Ref B: SEL20EDGE0419 Ref C: 2022-09-13T22:48:05Z',
};

console.log(result_to.resourceSets[0].resources[0].point.coordinates);
console.log(result_to.resourceSets[0].resources[1].point.coordinates);
console.log(result_to.resourceSets[0].resources[2].point.coordinates);
console.log(result_to.resourceSets[0].resources[3].point.coordinates);
console.log(result_to.resourceSets[0].resources[4].point.coordinates);

// The code up here will fetch us the cordinates of the location that the user will input. Launch the same shit with to and from
// Docs - https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/find-a-location-by-query
// Thought I could add - https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/local-search local search The Bing Maps Local Search API returns a list of business entities centered around a location or a geographic region. But it just works on US addresses
