// This file contains object with methods to make CRUD operations
import {Router, Request, Response} from 'express';
import {db} from "../db/db";
// import {createVideo} from './createVideo';
import {
    authorFieldValidator,
    availableResolutionsFieldValidator,
    titleFieldValidator,
    canBeDownloadedFieldValidator,
    minAgeRestrictionFieldValidator, publicationDateFieldValidator
} from "../validation/field-validation";
import {errorResponse} from "../validation/errorResponse";

export const videoRouter = Router()

export const videoController = {
    getVideos: (req: Request, res: Response)=> {
        const videos = db.videos // get videos from database
        res.status(200).send(videos)
    },
    getVideoById: (req: Request, res: Response) => {
        const video = db.videos.find(v => v.id === +req.params.id)
        if (video) {
            res.send(video)
        } else {
            res.send(404)
        }
    },
    createVideo: (req: Request, res: Response) => {
        const now = new Date();

        const title = req.body.title
        const author = req.body.author
        const canBeDownloaded = req.body.canBeDownloaded ?? false
        const minAgeRestriction = req.body.minAgeRestriction ?? null
        const createdAt = now.toISOString();
        const publicationDate = req.body.publicationDate
            ?? new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
        const availableResolutions = req.body.availableResolutions

        const errorsArray: Array<{field:string; message:string}> = []

        titleFieldValidator(title, errorsArray)
        authorFieldValidator(author, errorsArray)
        availableResolutionsFieldValidator(availableResolutions, errorsArray)

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
        }
        db.videos = [...db.videos, video]
        res.status(201).send(video)
    },
    updateVideoById: (req: Request, res: Response) => {
        const video = db.videos.find(v => v.id === +req.params.id);
        if (!video) {
            res.sendStatus(404);
            return;
        }

        const { title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate } = req.body;

        const errorsArray: Array<{ field: string; message: string }> = [];

        titleFieldValidator(title, errorsArray);
        availableResolutionsFieldValidator(availableResolutions, errorsArray);
        authorFieldValidator(author, errorsArray);
        canBeDownloadedFieldValidator(canBeDownloaded, errorsArray);
        minAgeRestrictionFieldValidator(minAgeRestriction, errorsArray);
        publicationDateFieldValidator(publicationDate, errorsArray);

        if (errorsArray.length > 0) {
            res.status(400).send(errorsArray);
            return;
        }

        video.title = title;
        video.author = author;
        video.canBeDownloaded = canBeDownloaded ?? false;
        video.minAgeRestriction = minAgeRestriction ?? null;
        video.publicationDate = publicationDate;
        video.availableResolutions = availableResolutions;

        res.status(204).send(video);
    },

    deleteVideoById: (req: Request, res: Response) => {
        if (!db.videos.find(v => v.id === +req.params.id)) {
            res.sendStatus(404);
            return;
        }
        db.videos = db.videos.filter(v => v.id !== +req.params.id)
        res.sendStatus(204)
    },

    deleteAllVideos: (req: Request, res: Response) => {
        db.videos = []
        res.send(204)
    },
}

videoRouter.get('/', videoController.getVideos)
videoRouter.get('/:id', videoController.getVideoById)
videoRouter.post('/', videoController.createVideo)
videoRouter.put('/:id', videoController.updateVideoById)
videoRouter.delete('/:id', videoController.deleteVideoById)
videoRouter.delete('/all-data', videoController.deleteAllVideos)