const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connetti alla base di dati MongoDB
mongoose.connect(process.env.MONGODB_URI, {
});

// Definisci i modelli di dati
const BoulderSchema = new mongoose.Schema({
  name: String,
  grade: String,
  holds: String
});

const HoldsLayoutSchema = new mongoose.Schema({
  name: String,
  holds: String
});


const Boulder = mongoose.model('Boulder', BoulderSchema);
const HoldsLayout = mongoose.model('HoldsLayout', HoldsLayoutSchema);

// Definisci le rotte
app.get('/api/boulders', async (req, res) => {
  try {
    const boulders = await Boulder.find();
    res.json(boulders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/getLayout', async (req, res) => {
  try {
    const layout = await HoldsLayout.find({"name": "Layout 2024"});
    res.json(layout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/setLayout', async (req, res) => {
  const holdsLayout = new HoldsLayout();
  holdsLayout.name = "Layout 2024";
  holdsLayout.holds = process.env.holdsLayout;
  try {
    await holdsLayout.save();
    res.status(201).json(holdsLayout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/boulder', async (req, res) => {
  console.log(req.body)
  const boulder = new Boulder(req.body);
  try {
    await boulder.save();
    console.log("dopo risposta: " + boulder);
    res.status(201).json(boulder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.delete('/api/deleteBoulder', async (req, res) => {
    try{
        const boulderId = req.body;
        const boulder = await Boulder.findOneAndDelete({_id: boulderId});
        
        if(!boulder){
            return res.status(404).json({message: 'Boulder non trovata'});
        }
        res.status(200).json({ message: 'Boulder eliminato con successo' });
    } catch(error){
        console.log(error);
        res.status(500).json({ message: 'Errore durante l\'eliminazione del boulder' });
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
