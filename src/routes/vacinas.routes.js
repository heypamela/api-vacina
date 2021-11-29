const express = require("express");
const router = express.Router();
const controller = require("../controllers/vacinas.controller");
    

router.post("/vaccines", controller.createVaccines);
router.get("/vaccines", controller.findAllVaccines);
router.get("/vaccines/:id", controller.findVaccine);
router.patch("/vaccines/:id/vaccinated", controller.updateVaccine);


module.exports = router;