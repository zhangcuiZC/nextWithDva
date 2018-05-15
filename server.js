const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app
    .prepare()
    .then(() => {
        const server = express();

        server.get("*", (req, res) => {
            const userAgent = req.headers["user-agent"];
            const pathname = req.path;
            const queryParams = req.query;
            if (userAgent.indexOf("Mobile") !== -1) {
                queryParams.mobile = 1;
            }
            app.render(req, res, pathname, queryParams);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
