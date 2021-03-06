const express = require("express")
const router = express.Router();
const controller = require("../controllers/machineController")

router
    .route("/:ip")
    .get(controller.getMachinebyIP)
    .put(controller.updateMachineByIP)
    .delete(controller.deleteMachinebyIp)

router
    .route("")
    .get(controller.getAllMachines)
    .post(controller.addMachine)


module.exports = router;