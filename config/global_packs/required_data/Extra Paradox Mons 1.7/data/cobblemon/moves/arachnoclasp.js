({
	    num: 9900,
        accuracy: 100,
		basePower: 110,
		category: "Physical",
		isNonstandard: "Past",
		name: "Arachno Clasp",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('DNA', pokemon, null, move, 'Bug');
		},
		secondary: {
	     chance: 20,
         VolatileStatus: "flinch",
		},
		target: "normal",
		type: "Bug",
		contestType: "Tough",
 })

