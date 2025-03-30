"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationDateFieldValidator = exports.minAgeRestrictionFieldValidator = exports.canBeDownloadedFieldValidator = exports.availableResolutionsFieldValidator = exports.authorFieldValidator = exports.titleFieldValidator = void 0;
const dto_1 = require("../videos/dto");
const titleFieldValidator = (title, errorsArray) => {
    if (title === null || title === undefined) {
        errorsArray.push({ message: 'no title', field: 'title' });
        return;
    }
    if (typeof title !== 'string') {
        errorsArray.push({
            message: 'not a string',
            field: 'title'
        });
        return;
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({
            message: 'more than 40 characters',
            field: 'title'
        });
        return;
    }
    if (title && title.trim().length < 1) {
        errorsArray.push({
            message: 'no title',
            field: 'title'
        });
        return;
    }
};
exports.titleFieldValidator = titleFieldValidator;
const authorFieldValidator = (author, errorsArray) => {
    if (author === null || author === undefined) {
        errorsArray.push({ message: 'no author', field: 'author' });
        return;
    }
    if (typeof author !== 'string') {
        errorsArray.push({
            message: 'not a string',
            field: 'author'
        });
        return;
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({
            message: 'more than 20 characters',
            field: 'author'
        });
        return;
    }
    if (author && author.trim().length < 1) {
        errorsArray.push({
            message: 'no author',
            field: 'author'
        });
        return;
    }
};
exports.authorFieldValidator = authorFieldValidator;
const availableResolutionsFieldValidator = (availableResolutions, errorsArray) => {
    if (availableResolutions && availableResolutions.length) {
        availableResolutions.forEach((resolution) => {
            if (!Object.keys(dto_1.ResolutionsEnum).includes(resolution)) {
                errorsArray.push({
                    message: 'exist no valid value',
                    field: 'availableResolutions'
                });
                return;
            }
        });
    }
};
exports.availableResolutionsFieldValidator = availableResolutionsFieldValidator;
const canBeDownloadedFieldValidator = (canBeDownloaded, errorsArray) => {
    if (canBeDownloaded === null || canBeDownloaded === undefined) {
        errorsArray.push({ message: 'no info on canBeDownloaded', field: 'canBeDownloaded' });
        return;
    }
    if (typeof canBeDownloaded !== 'boolean') {
        errorsArray.push({
            message: 'not a boolean',
            field: 'canBeDownloaded'
        });
        return;
    }
};
exports.canBeDownloadedFieldValidator = canBeDownloadedFieldValidator;
const minAgeRestrictionFieldValidator = (minAgeRestriction, errorsArray) => {
    if (minAgeRestriction === null || minAgeRestriction === undefined) {
        errorsArray.push({ message: 'no minAgeRestriction', field: 'minAgeRestriction' });
        return;
    }
    if (minAgeRestriction === null) {
        return;
    }
    if (typeof minAgeRestriction !== 'number') {
        errorsArray.push({
            message: 'not a number',
            field: 'minAgeRestriction'
        });
        return;
    }
    if (minAgeRestriction && minAgeRestriction > 18) {
        errorsArray.push({
            message: 'max age is 18, enter number from 1 to 18',
            field: 'minAgeRestriction'
        });
        return;
    }
    if (minAgeRestriction && minAgeRestriction < 1) {
        errorsArray.push({
            message: 'enter a valid number from 1 to 18',
            field: 'minAgeRestriction'
        });
        return;
    }
};
exports.minAgeRestrictionFieldValidator = minAgeRestrictionFieldValidator;
const publicationDateFieldValidator = (publicationDate, errorsArray) => {
    if (publicationDate === null || publicationDate === undefined) {
        errorsArray.push({ message: 'no info on publicationDate', field: 'publicationDate' });
        return;
    }
    if (typeof publicationDate !== 'string') {
        errorsArray.push({
            message: 'not a string',
            field: 'publicationDate'
        });
        return;
    }
};
exports.publicationDateFieldValidator = publicationDateFieldValidator;
