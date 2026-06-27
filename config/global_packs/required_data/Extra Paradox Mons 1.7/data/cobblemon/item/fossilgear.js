({
		name: "Fossil Gear",
		spritenum: 9993,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Rock',
		forcedForme: "wildgene-fossil",
		itemUser: ["wildgene-fossil"],
		num: 9993,
		gen: 9,
		isNonstandard: "Past",
	})
