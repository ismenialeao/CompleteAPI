const express = require("express")
const router = express.Router()

const controller = require("../controllers/passengersControllers")

router.get("passengers".controller.getAllPassagers)
router.get("passengers/:id", controller.getPassagersById)

router.post("passengers/:id/passenger/create", controller.createPassagers)

router.delete("/passegers/id:/delete", controller.deletePassengers)

router.put("/passegenrs/id/put", controller.putPassagenrs)

router.patch("passengers/id/path", controller.patchPassengers)


module.exports = router