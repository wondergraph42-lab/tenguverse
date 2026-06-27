({
		name: "Flare Gear",
		spritenum: 9999,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Fire',
		forcedForme: "wildgene-flare",
		itemUser: ["wildgene-flare"],
		num: 9999,
		gen: 9,
		isNonstandard: "Past",
	})
