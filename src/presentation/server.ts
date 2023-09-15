import express from "express";

export class Server {
	public readonly app = express();

	async start() {
        this.app.listen(3000, () => {
            console.log(`Server is running on port ${ 3000 }`)
        })
    }
}
