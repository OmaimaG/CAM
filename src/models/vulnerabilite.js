
import mongoose from 'mongoose';

const vulnerabiliteSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String },
  reclamation :{ type: String },
  servity :{type:String},

});

const Vulnerabilite = mongoose.models['Vulnerabilite'] || mongoose.model('Vulnerabilite', vulnerabiliteSchema);

export default Vulnerabilite;