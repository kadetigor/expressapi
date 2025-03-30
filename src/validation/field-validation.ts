import {ResolutionsEnum} from '../videos/dto';


export const titleFieldValidator = (
    title: string,
    errorsArray: Array<{message: string; field: string;}>
)=> {
    if (title === null || title === undefined) {
        errorsArray.push({message: 'no title', field: 'title'})
        return;
    }
    if (typeof title !== 'string') {
        errorsArray.push({
            message: 'not a string',
            field: 'title'
        })
        return;
    }
    if (title && title.trim().length > 40) {
        errorsArray.push({
            message: 'more than 40 characters',
            field: 'title'
        })
        return;
    }
    if (title && title.trim().length < 1) {
        errorsArray.push({
            message: 'no title',
            field: 'title'
        })
        return;
    }
}

export const authorFieldValidator = (
    author: string | undefined,
    errorsArray: Array<{message: string; field: string;}>
)=> {
    if (author === null || author === undefined) {
        errorsArray.push({message: 'no author', field: 'author'})
        return;
    }
    if (typeof author !== 'string') {
        errorsArray.push({
            message: 'not a string',
            field: 'author'
        })
        return;
    }
    if (author && author.trim().length > 20) {
        errorsArray.push({
            message: 'more than 20 characters',
            field: 'author'
        })
        return;
    }
    if (author && author.trim().length < 1) {
        errorsArray.push({
            message: 'no author',
            field: 'author'
        })
        return;
    }
}

export const availableResolutionsFieldValidator = (
    availableResolutions: Array<string>,
    errorsArray: Array<{message: string; field: string;}>
)=> {
    if (availableResolutions && availableResolutions.length) {
        availableResolutions.forEach((resolution: string) => {
            if (!Object.keys(ResolutionsEnum).includes(resolution)) {
                errorsArray.push({
                    message: 'exist no valid value',
                    field: 'availableResolutions'
                })
                return
            }
        })
    }
}

export const canBeDownloadedFieldValidator = (
    canBeDownloaded: boolean | undefined,
    errorsArray: Array<{message: string; field: string;}>
)=> {
    if (canBeDownloaded === null || canBeDownloaded === undefined) {
        errorsArray.push({message: 'no info on canBeDownloaded', field: 'canBeDownloaded'})
        return;
    }
    if (typeof canBeDownloaded !== 'boolean') {
        errorsArray.push({
            message: 'not a boolean',
            field: 'canBeDownloaded'
        })
        return;
    }
}

export const minAgeRestrictionFieldValidator = (
    minAgeRestriction: number | undefined | null,
    errorsArray: Array<{message: string; field: string;}>
)=> {
    if (minAgeRestriction === null || minAgeRestriction === undefined) {
        errorsArray.push({message: 'no minAgeRestriction', field: 'minAgeRestriction'})
        return;
    }
    if (minAgeRestriction === null) {
        return;
    }
    if (typeof minAgeRestriction !== 'number') {
        errorsArray.push({
            message: 'not a number',
            field: 'minAgeRestriction'
        })
        return;
    }
    if (minAgeRestriction && minAgeRestriction > 18) {
        errorsArray.push({
            message: 'max age is 18, enter number from 1 to 18',
            field: 'minAgeRestriction'
        })
        return;
    }
    if (minAgeRestriction && minAgeRestriction < 1) {
        errorsArray.push({
            message: 'enter a valid number from 1 to 18',
            field: 'minAgeRestriction'
        })
        return;
    }
}


export const publicationDateFieldValidator = (
    publicationDate: string | undefined,
    errorsArray: Array<{message: string; field: string;}>
)=> {
    if (publicationDate === null || publicationDate === undefined) {
        errorsArray.push({message: 'no info on publicationDate', field: 'publicationDate'})
        return;
    }
    if (typeof publicationDate !== 'string') {
        errorsArray.push({
            message: 'not a string',
            field: 'publicationDate'
        })
        return;
    }
}