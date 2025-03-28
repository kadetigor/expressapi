"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
const dto_1 = require("../videos/dto");
exports.db = {
    videos: [{
            id: 1,
            title: "New title",
            author: "Vlad",
            canBeDownloaded: true,
            minAgeRestriction: 18, // 1–18 or null
            createdAt: "2025-03-28T14:23:06.388Z", // ISO date-time
            publicationDate: "2025-03-28T14:23:06.388Z", // ISO date-time
            availableResolutions: [dto_1.ResolutionsEnum.P144],
            // author: 'a' + Date.now() + Math.random()
            // etc.
        }, {
            id: 86,
            title: "The nine",
            author: "Igor",
            canBeDownloaded: true,
            minAgeRestriction: 8, // 1–18 or null
            createdAt: "2025-03-28T14:23:06.388Z", // ISO date-time
            publicationDate: "2025-03-28T14:23:06.388Z", // ISO date-time
            availableResolutions: [dto_1.ResolutionsEnum.P1080],
        }
    ]
};
// this function clears DB if nothing is passed to it. If something is passed it will rewrite current DB
const setDB = (dataset) => {
    if (!dataset) {
        exports.db.videos = [];
        return;
    }
    exports.db.videos = dataset.videos || exports.db.videos;
};
exports.setDB = setDB;
