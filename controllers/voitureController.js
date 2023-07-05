const Voiture = require('../models/voitureModel');

exports.selectAllCar = async (req, res) => {
    try {
        const cars = await Voiture.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCar = async (req, res) => {
    const { name, model, brand, transmission } = req.body;
    try {
        const newCar = new Voiture({ name, model, brand, transmission });
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.selectCar = async (req, res) => {
    try {
        const car = await Voiture.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Voiture non trouvée' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCar = async (req, res) => {
    const { name, model, brand, transmission } = req.body;
    try {
        const updatedCar = await Voiture.findByIdAndUpdate(
            req.params.id,
            { name, model, brand, transmission },
            { new: true }
        );
        if (!updatedCar) {
            return res.status(404).json({ message: 'Voiture non trouvée' });
        }
        res.status(200).json({ message: 'Voiture bien modifiée' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Voiture.findByIdAndDelete(req.params.id);
        if (!deletedCar) {
            return res.status(404).json({ message: 'Voiture non trouvée' });
        }
        res.status(200).json({ message: 'Voiture bien supprimée' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
