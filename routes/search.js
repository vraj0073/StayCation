// Written by - Kishan Kahodariya

const router = require("express").Router();
let Accomodation = require("../models/accomodation.model");

router.route("/").get(async (req, res) => {
  console.log("simpleSearch");
  try {
    const accomodationList = await Accomodation.find();
    return res.status(200).json(accomodationList);
  } catch (err) {
    return res
      .status(500)
      .json({ success: "false", message: "Users Not Retrieved" });
  }
});

router.route("/simplesearch/:location").get(async (req, res) => {
  console.log("simplesearch with location: " + req.params.location);
  const usrLocation = req.params.location.toLowerCase();

  try {
    const accomodationList = await Accomodation.find({
      $or: [
        { location: usrLocation },
        { state: usrLocation },
        { country: usrLocation },
      ],
    });
    return res.status(200).json(accomodationList);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: "false", message: "Users Not Retrieved" });
  }
});

router
  .route("/customsearch/:location/:type/:duration")
  .get(async (req, res) => {
    const usrLocation = req.params.location.toLowerCase();
    const type = req.params.type.toLowerCase();
    const duration = req.params.duration.toLowerCase();
    console.log(
      "customsearch with all parameter: " +
        usrLocation +
        " " +
        type +
        " " +
        duration
    );

    try {
      const accomodationList = await Accomodation.find({
        $and: [
          {
            $or: [
              { location: usrLocation },
              { state: usrLocation },
              { country: usrLocation },
            ],
          },
          { type: type },
          { duration: duration },
        ],
      });
      return res.status(200).json(accomodationList);
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: "false", message: "Users Not Retrieved" });
    }
  });

module.exports = router;
