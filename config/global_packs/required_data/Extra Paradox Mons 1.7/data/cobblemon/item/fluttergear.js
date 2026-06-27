({
		name: "Flutter Gear",
		spritenum: 9994,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 9908) || pokemon.baseSpecies.num === 9908) {
				return false;
			}
			return true;
		},
		onDrive: 'Fairy',
		forcedForme: "wildgene-flutter",
		itemUser: ["wildgene-flutter"],
		num: 9994,
		gen: 9,
		isNonstandard: "Past",
	})
