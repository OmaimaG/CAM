import mongoose from 'mongoose';

const departementSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
 
});

const Departement = mongoose.models['Departement'] || mongoose.model('Departement', departementSchema);

export default Departement;