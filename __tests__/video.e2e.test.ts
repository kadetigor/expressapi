import {setDB} from '../src/db/db';
import {SETTINGS} from "../src/settings";
import {app} from '../src/app';
import {agent} from 'supertest';
import {CreateVideoInputModel, UpdateVideoInputModel} from "../src/videos/dto";
import {ResolutionsEnum} from "../src/videos/dto";

describe ('Video API', () => {
    // beforeAll(async() => { setDB() }) clear database before tests
    it('should return all videos', async () => {
        // setDB() // clear DB if needed
        const res = await agent(app)
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200) // check endpoint availability
        console.log(res.body) // see what endpoint returns
    })
    it('should return video by id', async () => {
        // setDB(dataset1) fill the DB with starting data if needed
        const res = await agent(app)
            .get(`${SETTINGS.PATH.VIDEOS}/1`)
            .expect(200)
        console.log(res.body)
        expect(res.body.id).toBe(1)
        // expect(res.body[0]).toEqual(dataset1.videos[0])
    })
    it('should create new video', async () => {
        const newVideo: CreateVideoInputModel = {
            "title": "string",
            "author": "string",
            "availableResolutions": [ResolutionsEnum.P144]
        }

        const res = await agent(app)
            .post(SETTINGS.PATH.VIDEOS)
            .send(newVideo)
            .expect(201)
        expect(res.body.availableResolutions).toEqual(newVideo.availableResolutions)
    })
    it('should update video by id', async () => {
        const updatedFields: UpdateVideoInputModel = {
            "title": "string",
            "author": "string",
            "availableResolutions": [ResolutionsEnum.P144],
            "canBeDownloaded": true,
            "minAgeRestriction": 18,
            "publicationDate": "2025-03-28T16:13:23.426Z"
        }

        const res = await agent(app)
            .post(SETTINGS.PATH.VIDEOS)
            .send(updatedFields)
            .expect(201)
        expect(res.body.availableResolutions).toEqual(updatedFields.availableResolutions)
    })
    it('should delete video by id', async () => {
        const res = await agent(app)
            .delete(`${SETTINGS.PATH.VIDEOS}/1`)
            .expect(204)
    })
    it('should delete all videos', async () => {
        const res = await agent(app)
            .delete(`${SETTINGS.PATH.VIDEOS}/all-data`)
    })
})