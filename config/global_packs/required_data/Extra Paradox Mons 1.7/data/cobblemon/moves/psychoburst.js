({
    num: 9915,
   accuracy: 100,
   basePower: 110,
   category: "Special",
   name: "Psycho Burst",
   pp: 5,
   priority: 0,
   flags: { protect: 1, mirror: 1, metronome: 1 },
    onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Psychic') return;
			if (!target) return;
			if (!target.runImmunity('Psychic')) {
				if (target.hasType('Dark')) return 1;
			}
		},
    onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
   ignoreImmunity: {'Psychic': true},
   secondary: null,
   target: "normal",
   type: "Psychic",
   contestType: "Clever"
 })

