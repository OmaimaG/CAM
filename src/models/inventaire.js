import mongoose from 'mongoose';

const inventaireSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
  vulnerabilites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vulnerabilite' }],
  chefdepartement: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chefdepartement' }],
});

const Inventaire = mongoose.models['Inventaire'] || mongoose.model('Inventaire', inventaireSchema);

export default Inventaire;
