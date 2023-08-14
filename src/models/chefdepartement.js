import mongoose from 'mongoose';

const chefDepartementschema = new mongoose.Schema({
  nom: { type: String, required: true },
  specialite: { type: String },
  experience: { type: Number },
  departementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Departement' },
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
});

const Chefdepartement = mongoose.models['Technicien'] || mongoose.model('Technicien', chefDepartementschema);

export default Chefdepartement;