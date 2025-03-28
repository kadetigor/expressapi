"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationDateFieldValidator = exports.minAgeRestrictionFieldValidator = exports.canBeDownloadedFieldValidator = exports.availableResolutionsFieldValidator = exports.authorFieldValidator = exports.titleFieldValidator = void 0;
const dto_1 = require("../videos/dto");
const titleFieldValidator = (title, errorsArray) => {
    if (!title) {
        errorsArray.push({ field: 'title', message: 'no title' });
    }
    if (typeof title !== 'string') {
        errorsArray.push({
            field: 'title',
            message: 'not a string'
        });
        return;
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({
            field: 'title',
            message: 'more than 40 characters'
        });
    }
    if (title && title.trim().length < 1) {
        errorsArray.push({
            field: 'title',
            message: 'no title'
        });
    }
};
exports.titleFieldValidator = titleFieldValidator;
const authorFieldValidator = (author, errorsArray) => {
    if (!author) {
        errorsArray.push({ field: 'author', message: 'no author' });
    }
    if (typeof author !== 'string') {
        errorsArray.push({
            field: 'author',
            message: 'not a string'
        });
        return;
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({
            field: 'author',
            message: 'more than 20 characters'
        });
    }
    if (author && author.trim().length < 1) {
        errorsArray.push({
            field: 'author',
            message: 'no author'
        });
    }
};
exports.authorFieldValidator = authorFieldValidator;
const availableResolutionsFieldValidator = (availableResolutions, errorsArray) => {
    if (availableResolutions && availableResolutions.length) {
        availableResolutions.forEach((resolution) => {
            if (!Object.keys(dto_1.ResolutionsEnum).includes(resolution)) {
                errorsArray.push({
                    field: 'availableResolutions',
                    message: 'exist no valid value'
                });
                return;
            }
        });
    }
};
exports.availableResolutionsFieldValidator = availableResolutionsFieldValidator;
const canBeDownloadedFieldValidator = (canBeDownloaded, errorsArray) => {
    if (!canBeDownloaded) {
        errorsArray.push({ field: 'canBeDownloaded', message: 'no info on canBeDownloaded' });
    }
    if (typeof canBeDownloaded !== 'boolean') {
        errorsArray.push({
            field: 'canBeDownloaded',
            message: 'not a boolean'
        });
        return;
    }
};
exports.canBeDownloadedFieldValidator = canBeDownloadedFieldValidator;
const minAgeRestrictionFieldValidator = (minAgeRestriction, errorsArray) => {
    if (!minAgeRestriction) {
        errorsArray.push({ field: 'minAgeRestriction', message: 'no minAgeRestriction' });
    }
    if (minAgeRestriction === null) {
        return;
    }
    if (typeof minAgeRestriction !== 'number') {
        errorsArray.push({
            field: 'minAgeRestriction',
            message: 'not a number'
        });
        return;
    }
    if (minAgeRestriction && minAgeRestriction > 18) {
        errorsArray.push({
            field: 'minAgeRestriction',
            message: 'max age is 18, enter number from 1 to 18'
        });
    }
    if (minAgeRestriction && minAgeRestriction < 1) {
        errorsArray.push({
            field: 'minAgeRestriction',
            message: 'enter a valid number from 1 to 18'
        });
    }
};
exports.minAgeRestrictionFieldValidator = minAgeRestrictionFieldValidator;
const publicationDateFieldValidator = (publicationDate, errorsArray) => {
    if (!publicationDate) {
        errorsArray.push({ field: 'publicationDate', message: 'no info on publicationDate' });
    }
    if (typeof publicationDate !== 'string') {
        errorsArray.push({
            field: 'publicationDate',
            message: 'not a string'
        });
        return;
    }
};
exports.publicationDateFieldValidator = publicationDateFieldValidator;
