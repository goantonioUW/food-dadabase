const router = require("express").Router();

const options = {
  method: "GET",
  hostname: "dad-jokes.p.rapidapi.com",
  port: null,
  path: "/random/joke",
  headers: {
    "x-rapidapi-key": "3d02f8056amshd148c6cae11c0ffp18e242jsn76c5e82973e1",
    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    useQueryString: true
  }
};

const req = http.request(options, res => {
  const chunks = [];

  res.on("data", chunk => {
    chunks.push(chunk);
  });

  res.on("end", () => {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
