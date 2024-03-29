import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 15 },
    { duration: '20s', target: 15 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<600'],
  },
};

export default function () {
  const resFast = http.get(`${__ENV.MY_HOSTNAME}/sampleapi`);
}