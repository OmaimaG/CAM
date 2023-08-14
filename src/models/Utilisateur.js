// models/utilisateur.js

import mongoose from 'mongoose';
import Directeur from './directeur';


const utilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number },
  adresse: { type: String },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  date: { type: Date, default: Date.now },
  departement : { type: String },
  position: { type: String },
  

});

const Utilisateur = mongoose.models['Utilisateur'] || mongoose.model('Utilisateur', utilisateurSchema);

export default Utilisateur;
