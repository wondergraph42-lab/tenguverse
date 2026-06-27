({
		name: "Genesis USB 01",
		spritenum: 9989,
		megaStone: "Iron Genesis-Mega-Y",
		megaEvolves: "Iron Genesis",
		itemUser: ["Iron Genesis"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 9989,
		gen: 9,
		isNonstandard: "Past",
	})

