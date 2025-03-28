import {ResolutionsEnum} from "../videos/dto";

export type DBType = {
    videos: any[] //VideoFBType[]
}

export const db: DBType = {
    videos: [{
        id: 1,
        title: "New title",
        author: "Vlad",
        canBeDownloaded: true,
        minAgeRestriction: 18, // 1–18 or null
        createdAt: "2025-03-28T14:23:06.388Z", // ISO date-time
        publicationDate: "2025-03-28T14:23:06.388Z", // ISO date-time
        availableResolutions: [ResolutionsEnum.P144],
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
        availableResolutions: [ResolutionsEnum.P1080],
    }
    ]
}

// this function clears DB if nothing is passed to it. If something is passed it will rewrite current DB
export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) {
        db.videos = []
        return
    }
    db.videos = dataset.videos || db.videos
}