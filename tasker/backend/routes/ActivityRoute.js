const { Router } = require("express");

const { getActivity, saveActivity, updateActivity, deleteActivity} = require("../controllers/ActivityController");

const router = Router();

router.get("/activities", getActivity);

router.post("/activities/save", saveActivity);

router.post('/activities/update', updateActivity);

router.post('/activities/delete', deleteActivity)

module.exports = router;