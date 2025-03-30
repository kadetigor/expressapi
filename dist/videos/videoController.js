"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoController = exports.videoRouter = void 0;
// This file contains object with methods to make CRUD operations
const express_1 = require("express");
const db_1 = require("../db/db");
// import {createVideo} from './createVideo';
const field_validation_1 = require("../validation/field-validation");
// import {errorResponse} from "../validation/errorResponse";
// import {SETTINGS} from "../settings";
exports.videoRouter = (0, express_1.Router)();
exports.videoController = {
    getVideos: (req, res) => {
        const videos = db_1.db.videos; // get videos from database
        res.status(200).send(videos);
    },
    getVideoById: (req, res) => {
        const video = db_1.db.videos.find(v => v.id === +req.params.id);
        if (video) {
            res.send(video);
        }
        else {
            res.send(404);
        }
    },
    createVideo: (req, res) => {
        var _a, _b, _c;
        const now = new Date();
        const title = req.body.title;
        const author = req.body.author;
        const canBeDownloaded = (_a = req.body.canBeDownloaded) !== null && _a !== void 0 ? _a : false;
        const minAgeRestriction = (_b = req.body.minAgeRestriction) !== null && _b !== void 0 ? _b : null;
        const createdAt = now.toISOString();
        const publicationDate = (_c = req.body.publicationDate) !== null && _c !== void 0 ? _c : new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
        const availableResolutions = req.body.availableResolutions;
        const errorsArray = [];
        (0, field_validation_1.titleFieldValidator)(title, errorsArray);
        (0, field_validation_1.authorFieldValidator)(author, errorsArray);
        (0, field_validation_1.availableResolutionsFieldValidator)(availableResolutions, errorsArray);
        if (errorsArray.length > 0) {
            res.status(400).send(errorsArray);
            return;
        }
        const video = {
            id: Date.now() + Math.random(),
            title: title,
            author: author,
            canBeDownloaded: canBeDownloaded,
            minAgeRestriction: minAgeRestriction,
            createdAt: createdAt,
            publicationDate: publicationDate,
            availableResolutions: availableResolutions,
        };
        db_1.db.videos = [...db_1.db.videos, video];
        res.status(201).send(video);
    },
    updateVideoById: (req, res) => {
        const video = db_1.db.videos.find(v => v.id === +req.params.id);
        if (!video) {
            res.sendStatus(404);
            return;
        }
        const { title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate } = req.body;
        const errorsArray = [];
        (0, field_validation_1.titleFieldValidator)(title, errorsArray);
        (0, field_validation_1.availableResolutionsFieldValidator)(availableResolutions, errorsArray);
        (0, field_validation_1.authorFieldValidator)(author, errorsArray);
        (0, field_validation_1.canBeDownloadedFieldValidator)(canBeDownloaded, errorsArray);
        (0, field_validation_1.minAgeRestrictionFieldValidator)(minAgeRestriction, errorsArray);
        (0, field_validation_1.publicationDateFieldValidator)(publicationDate, errorsArray);
        if (errorsArray.length > 0) {
            res.status(400).send(errorsArray);
            return;
        }
        video.title = title;
        video.author = author;
        video.canBeDownloaded = canBeDownloaded !== null && canBeDownloaded !== void 0 ? canBeDownloaded : false;
        video.minAgeRestriction = minAgeRestriction !== null && minAgeRestriction !== void 0 ? minAgeRestriction : null;
        video.publicationDate = publicationDate;
        video.availableResolutions = availableResolutions;
        res.status(204).send(video);
    },
    deleteVideoById: (req, res) => {
        if (!db_1.db.videos.find(v => v.id === +req.params.id)) {
            res.sendStatus(404);
            return;
        }
        db_1.db.videos = db_1.db.videos.filter(v => v.id !== +req.params.id);
        res.sendStatus(204);
    },
    deleteAllVideos: (req, res) => {
        db_1.db.videos = [];
        res.send(204);
    },
};
exports.videoRouter.get('/', exports.videoController.getVideos);
exports.videoRouter.get('/:id', exports.videoController.getVideoById);
exports.videoRouter.post('/', exports.videoController.createVideo);
exports.videoRouter.put('/:id', exports.videoController.updateVideoById);
exports.videoRouter.delete('/:id', exports.videoController.deleteVideoById);
exports.videoRouter.delete('/all-data', exports.videoController.deleteAllVideos);
