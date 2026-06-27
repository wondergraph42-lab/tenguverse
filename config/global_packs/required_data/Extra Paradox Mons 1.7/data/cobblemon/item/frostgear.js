({
		name: "Frost Gear",
		spritenum: 9997,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Ice',
		forcedForme: "wildgene-frost",
		itemUser: ["wildgene-frost"],
		num: 9997,
		gen: 9,
		isNonstandard: "Past",
	})
