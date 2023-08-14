import mongoose from 'mongoose';

const technicienSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  specialite: { type: String },
  experience: { type: Number },
  departementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Departement' },
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }
});

const Technicien = mongoose.models['Technicien'] || mongoose.model('Technicien', technicienSchema);

export default Technicien;