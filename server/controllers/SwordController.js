import SwordModel from "../models/SwordModel";

export function remove(req,res) {
    SwordModel.remove({_id: req.params.id })
    .then(swords => {
        return res.send("Sword has been cut");
    });
}

export function list(req, response) {
    SwordModel.find({}).exec()
    .then(swords => {
        return response.json(swords);
    });
   }

   export function create(req, res) {
    const contact = new SwordModel({
        name: req.body.name,
        length: req.body.length,
        origin: req.body.origin,  
      });
      contact.save()
      .then(user => {
        return res.json(user);
      });
     
   }
      