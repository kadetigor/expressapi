"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("./settings");
const app_1 = require("./app");
if (process.env.NODE_ENV !== 'production') {
    app_1.app.listen(settings_1.SETTINGS.PORT, () => {
        console.log(`Example app listening on port ${settings_1.SETTINGS.PORT}`);
    });
}
exports.default = app_1.app;
