// models/assetType.js

import mongoose from 'mongoose';

const assetTypeSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  
});

const AssetType = mongoose.models['AssetType'] || mongoose.model('AssetType', assetTypeSchema);

export default AssetType;
