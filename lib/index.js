"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv/config');
const App = require("./app");
const app = new App();
app
    .run()
    .catch(err => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map