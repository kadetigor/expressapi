import {ResolutionsEnum} from '../videos/dto';

export const titleFieldValidator = (
    title: string | undefined,
    errorsArray: Array<{field: string; message: string}>
)=> {
    if (!title) {
        errorsArray.push({field: 'title', message: 'no title'})
    }
    if (typeof title !== 'string') {
        errorsArray.push({
            field: 'title',
            message: 'not a string'
        })
        return;
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({
            field: 'title',
            message: 'more than 40 characters'
        })
    }
    if (title && title.trim().length < 1) {
        errorsArray.push({
            field: 'title',
            message: 'no title'
        })
    }
}

export const authorFieldValidator = (
    author: string | undefined,
    errorsArray: Array<{field: string; message: string}>
)=> {
    if (!author) {
        errorsArray.push({field: 'author', message: 'no author'})
    }
    if (typeof author !== 'string') {
        errorsArray.push({
            field: 'author',
            message: 'not a string'
        })
        return;
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({
            field: 'author',
            message: 'more than 20 characters'
        })
    }
    if (author && author.trim().length < 1) {
        errorsArray.push({
            field: 'author',
            message: 'no author'
        })
    }
}

export const availableResolutionsFieldValidator = (
    availableResolutions: Array<string>,
    errorsArray: Array<{field: string; message: string}>
)=> {
    if (availableResolutions && availableResolutions.length) {
        availableResolutions.forEach((resolution: string) => {
            if (!Object.keys(ResolutionsEnum).includes(resolution)) {
                errorsArray.push({
                    field: 'availableResolutions',
                    message: 'exist no valid value'
                })
                return
            }
        })
    }
}

export const canBeDownloadedFieldValidator = (
    canBeDownloaded: boolean | undefined,
    errorsArray: Array<{field: string; message: string}>
)=> {
    if (!canBeDownloaded) {
        errorsArray.push({field: 'canBeDownloaded', message: 'no info on canBeDownloaded'})
    }
    if (typeof canBeDownloaded !== 'boolean') {
        errorsArray.push({
            field: 'canBeDownloaded',
            message: 'not a boolean'
        })
        return;
    }
}

export const minAgeRestrictionFieldValidator = (
    minAgeRestriction: number | undefined | null,
    errorsArray: Array<{field: string; message: string}>
)=> {
    if (!minAgeRestriction) {
        errorsArray.push({field: 'minAgeRestriction', message: 'no minAgeRestriction'})
    }
    if (minAgeRestriction === null) {
        return;
    }
    if (typeof minAgeRestriction !== 'number') {
        errorsArray.push({
            field: 'minAgeRestriction',
            message: 'not a number'
        })
        return;
    }
    if (minAgeRestriction && minAgeRestriction > 18) {
        errorsArray.push({
            field: 'minAgeRestriction',
            message: 'max age is 18, enter number from 1 to 18'
        })
    }
    if (minAgeRestriction && minAgeRestriction < 1) {
        errorsArray.push({
            field: 'minAgeRestriction',
            message: 'enter a valid number from 1 to 18'
        })
    }
}


export const publicationDateFieldValidator = (
    publicationDate: string | undefined,
    errorsArray: Array<{field: string; message: string}>
)=> {
    if (!publicationDate) {
        errorsArray.push({field: 'publicationDate', message: 'no info on publicationDate'})
    }
    if (typeof publicationDate !== 'string') {
        errorsArray.push({
            field: 'publicationDate',
            message: 'not a string'
        })
        return;
    }
}