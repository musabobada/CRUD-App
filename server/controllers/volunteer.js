const { Volunteerdb } = require("../model/model");
const { removeFile } = require("../helpers/helpersFunction")
// create and save new volunteer
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const volunteer = new Volunteerdb({
    _id: req.body._id,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    subject: req.body.subject,
    profileCoverName: req.body.profileCoverName
  });
  volunteer
    .save(volunteer)
    .then((data) => {
      // res.send(`Volunteer Added successfully ${fileName ? "with profile cover name " + fileName : ""}`);
      // res.send(data);
      res.send(data);
      // res.send(data);
    })
    .catch((err) => {
      if (volunteer.profileCoverName) {
        removeFile(volunteer.profileCoverName)
        console.error(err)
      }
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all volunteers / single volunteer
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Volunteerdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error volunteer with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving volunteer with id ${id}` });
      });
  } else {
    Volunteerdb.find().then(volunteers => {
      volunteers.forEach(v => {
        v.profileCoverName = v.imagePath
      })
      res.send(volunteers);
    })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving volunteer information" });
      });
  }
};
// update volunteer wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Volunteerdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update volunteer with id ${id}, maybe volunteer doesn't exist` });
      } else {
        if (req.body.oldProfileCoverName) {
          removeFile(req.body.oldProfileCoverName)
        }
        res.send(data);
      }
    })
    .catch((err) => {
      if (data.profileCoverName) {
        removeFile(data.profileCoverName)
      }
      console.error(err)
      res.status(500).send({ message: "Error update volunteer information" });
    });
};
// delete volunteer wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Volunteerdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete volunteer with id ${id}. Maybe volunteer doesn't exist` });
      } else {
        if (data.profileCoverName) {
          removeFile(data.profileCoverName)
        }
        res.send({ message: "Volunteer Deleted successfully" });
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send({ message: "Couldn't delete volunteer with id " + id });
    });
};
