({
		name: "Wave Gear",
		spritenum: 9998,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Water',
		forcedForme: "wildgene-wave",
		itemUser: ["wildgene-wave"],
		num: 9998,
		gen: 9,
		isNonstandard: "Past",
	})
