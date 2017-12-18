import SwordModel from "../models/SwordModel";

export function list(req, response) {
    SwordModel.find({}).exec()
    .then(swords => {
        return response.json(swords);
    });
   }

   export function create(req, res) {
    res.json(contacts);
   }
      