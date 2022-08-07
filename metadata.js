let fs = require("fs");
let axios = require("axios");

let songs = ["JTiger", "JTwinkle"];
let durations = ["00:15", "00:05"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
    ipfsArray.push({
        path: `metadata/${i}.json`,
        content: {
            image: `ipfs://QmNYP9rLQu7UpxZ2nq4wbmjtdKwDnoKa3GJDwgtwZeijc4/media/1`, //xxx = hash
            name: songs[i],
            animation_url: `ipfs://QmNYP9rLQu7UpxZ2nq4wbmjtdKwDnoKa3GJDwgtwZeijc4/media/${i}`, //xxx = hash
            duration: durations[i],
            artist: "Snoop Lion",
            year: "2000"
        },
    });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
        "X-API-KEY":
            "9zUq8P9O8ZQx8nnSz0dBFTSmBojD5LoKUi1UeQcI3mR8q6L0EoITuo6SyLvGxWrJ",
        "Content-Type": "application/json",
        accept: "application/json",
    },
})
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    });