import {SETTINGS} from './settings'
import { app } from "./app";

if (process.env.NODE_ENV !== 'production'){
    app.listen(SETTINGS.PORT, () => {
        console.log(`Example app listening on port ${SETTINGS.PORT}`)
    })
}

export default app;