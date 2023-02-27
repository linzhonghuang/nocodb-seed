(async () => {
    try {
        const app = require('express')();
        const {Noco} = require("nocodb");
        const httpServer = app.listen(18080);
        app.use(await Noco.init({}, httpServer, app));
        console.log(`Visit : 127.0.0.1:18080/dashboard`)
    } catch(e) {
        console.log(e)
    }
})()
