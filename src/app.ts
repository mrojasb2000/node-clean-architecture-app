import { ConfigEnv } from "./config/envs"
import { MongoDatabase } from "./data"
import { AppRoute } from "./presentation/routes"
import { Server } from "./presentation/server"

(() => {
    main()
})()

async function main (){
    const configEnv = new ConfigEnv()
    // todo: await database
    const dbUrl = configEnv.GetAsString("MONGODB_URL", '')
    const dbName = configEnv.GetAsString("MONGODB_NAME", 'dbtest')
    await MongoDatabase.connect({
        mongoUrl: dbUrl,
        dbName: dbName,
    })
    // todo: start server
   
    const webServerPort = configEnv.GetAsNumber("WEB_PORT", 5000)
    console.log("Application is running...")
    new Server({
        port: webServerPort,
        routes: AppRoute.routes
    }).start()

}