({
		name: "Genesis USB 02",
		spritenum: 9988,
		megaStone: "Iron Genesis-Mega-X",
		megaEvolves: "Iron Genesis",
		itemUser: ["Iron Genesis"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 9988,
		gen: 9,
		isNonstandard: "Past",
	})

