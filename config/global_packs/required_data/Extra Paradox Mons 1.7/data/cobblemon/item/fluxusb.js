({
		name: "Flux USB",
		spritenum: 9989,
		megaStone: "Iron Flux-Mega",
		megaEvolves: "Iron Flux",
		itemUser: ["Iron Flux"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 9989,
		gen: 9,
		isNonstandard: "Past",
	})

