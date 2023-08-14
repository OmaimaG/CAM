import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  assetType: { type: mongoose.Schema.Types.ObjectId, ref: 'AssetType' },
  adresseIP: { type: String },
  os: { type: String },
  hardWare: { type: String },
  port: { type: String },
  up: { type: String },
  update: { type: String },
  mac: { type: String },
  assetLocation : { type: String },
  vulnerabilities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vulnerability' }]

});

const Asset = mongoose.models['Asset'] || mongoose.model('Asset', assetSchema);

export default Asset;