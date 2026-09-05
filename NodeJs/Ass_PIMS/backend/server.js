// const http = require('http');
//  const fs = require('fs');
// const url = require('url');
// const PORT = 3000 || 9000;
// const { getPlants, savePlants } = require('./plantService')
// //import { getPlant } from "./plantService.js";

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/plants") {
//         // let data = fs.readFileSync("plants.json");
//         // res.end(data);
//         const plants = getPlant();
//         res.writeHead(200, {
//             "Content-Type": "application/json",
//         });
//         res.end(JSON.stringify(plants))
//     }

//     else if (req.method === "POST" && req.url === "/plants") {
//         let data = "";
//         req.on("data", (chunk) => {
//             data += chunk;
//         });

//         req.on("end", () => {
//             const newPlant = JSON.parse(body);
//             const plants = getPlants();
//             newPlant.id = Date.now();
//             plants.push(newPlant);
//             savePlants(plants);
//             res.writeHead(201, {
//                 "Content-Type": "application/json"
//             });
//             res.end(JSON.stringify(newPlants));

//         });
            
//         //         let newPlant = JSON.parse(body);
//         //         newPlant.id = plants.length + 1;
//         //         plants.push(newPlant);

//         //         fs.writeFileSync(
//         //             "plants.json",
//         //             JSON.stringify(plants)
//         //         );

//         //         res.end("Plant added successfully");
//         //     });

//         // }
//         // else if (req.method === "PUT" && req.url === "/plants/:ID") {
        
//         //     }
        

//         // else {

//         //     res.end("404 : Page not found");

//         // }
//     }

// });

// server.listen(PORT, () => {
//     console.log("Server running");
// });


const http = require('http');
const url = require('url')
const PORT = 3000;
const { getPlants, savePlants } = require('./plantService');


const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);

    //GET ALL PLANTS
    if (req.method === "GET" && req.url === "/plants") {

        const plants = getPlants();

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(plants));
    }

    //ADD PLANTS
    else if (req.method === "POST" && req.url === "/plants") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const newPlant = JSON.parse(body);

            const plants = getPlants();

            newPlant.id = Date.now();

            plants.push(newPlant);

            savePlants(plants);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(newPlant));
        });
    }

    //UPDATE A PLANT
    else if (req.method === "PUT" && parseUrl.pathname.startsWith('/plants/')) {
        const id = Number(parseUrl.pathname.split("/")[2])
        console.log("ID is:", id);

        let body = "";

        req.on('data', (chunk) => {
            body += chunk;
        })

        req.on('end', () => {
            const updatedData = JSON.parse(body);
            const plants = getPlants();
            const plant = plants.find((p) => p.id === id);

            if (!plant) {
                res.writeHead(404)
                return res.end("Plant not found")
            }

            plant.name = updatedData.name;
            plant.price = updatedData.price;

            savePlants(plants);
            res.end(JSON.stringify(plant));
        })
    }

    //DELETE A PLANT
    else if (req.method === "DELETE" && parseUrl.pathname.startsWith('/plants/')) {
        const id = Number(parseUrl.pathname.split("/")[2]);
        const plants = getPlants();
        const updatedData = plants.filter((p) => p.id !== id);

        savePlants(updatedData);
        res.end("Deleted")
    }
    else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});