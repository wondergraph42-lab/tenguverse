({
		name: "Ghastly Gear",
		spritenum: 9992,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'ghost',
		forcedForme: "wildgene-ghastly",
		itemUser: ["wildgene-ghastly"],
		num: 9992,
		gen: 9,
		isNonstandard: "Past",
	})
