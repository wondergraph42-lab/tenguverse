({
		name: "Toxin Gear",
		spritenum: 9995,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Poison',
		forcedForme: "wildgene-toxin",
		itemUser: ["wildgene-toxin"],
		num: 9995,
		gen: 9,
		isNonstandard: "Past",
	})
