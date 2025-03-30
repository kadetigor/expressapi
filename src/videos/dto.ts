export type FieldError = {
    message: string | null; // Message with error explanation for certain field
    field: string | null; // What field/property of input model has error
}

export type APIErrorResult = {
    errorsMessages: FieldError[] | null;
}

export enum ResolutionsEnum {
    P144 = 'P144',
    P240 = 'P240',
    P360 = 'P360',
    P480 = 'P480',
    P720 = 'P720',
    P1080 = 'P1080',
    P1440 = 'P1440',
    P2160 = 'P2160'
}

export type CreateVideoInputModel = {
    title: string; // maxLength: 40
    author: string; // maxLength: 20
    availableResolutions: ResolutionsEnum[] // must contain at least 1
};

export type UpdateVideoInputModel = {
    title: string; // maxLength: 40
    author: string; // maxLength: 20
    availableResolutions: ResolutionsEnum[]; // must contain at least 1
    canBeDownloaded: boolean;
    minAgeRestriction: number | null; // between 1 and 18, or null
    publicationDate: string; // ISO 8601 format, e.g. '2023-01-01T00:00:00Z'
};

export type Video = {
    id: number;
    title: string;
    author: string;
    canBeDownloaded: boolean;
    minAgeRestriction: number | null; // 1–18 or null
    createdAt: string; // ISO date-time
    publicationDate: string; // ISO date-time
    availableResolutions: ResolutionsEnum[];
};


