({
		name: "Zap Gear",
		spritenum: 9996,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Electric',
		forcedForme: "wildgene-zap",
		itemUser: ["wildgene-zap"],
		num: 9996,
		gen: 9,
		isNonstandard: "Past",
	})
