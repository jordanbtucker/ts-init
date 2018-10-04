"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Debug = require("debug");
const debug = Debug('ts-init');
class App {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield Promise.resolve(`Hello, ${process.env.NAME}!`);
            debug('message: %s', message);
            console.log(message);
        });
    }
}
module.exports = App;
//# sourceMappingURL=app.js.map