import http from 'http';

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(" Client URL:", req.url);

    const product = [
        {
            name: "Iphone",
            price: 99999,
            qty: 3,
            discount: 15
        },
        {
            name: "IQOO",
            price: 75000,
            qty: 2,
            discount: 18
        }
    ];

    res.end(JSON.stringify(product));
});

server.listen(3000, () =>
    console.log("server is running at 3000.....")
);