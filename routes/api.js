// import media Controller
const mediaController = require("../controller/mediaController");

// import express
const express = require("express");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hello Mahmudi Apakabar....");
});

// Routing for medias
router.get("/medias", mediaController.index);
router.post("/medias", mediaController.store);
router.put("/medias/:id", mediaController.update);
router.delete("/medias/:id", mediaController.destroy);
router.get("/medias/:id", mediaController.show);

// export routing
module.exports = router;