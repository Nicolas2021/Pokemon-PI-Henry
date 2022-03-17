const { Router } = require("express");
const PokemonController = require("../controller/pokemonController");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/getAll", PokemonController.getAllPokemons);
router.get("/getById/:id", PokemonController.getById);
router.post("/createPokemon", PokemonController.createPokemon);
router.get("/getTypes", PokemonController.getAllTypes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
