({
		name: "Flare USB",
		spritenum: 9990,
		megaStone: "Iron Flare-Mega",
		megaEvolves: "Iron Flare",
		itemUser: ["Iron Flare"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 9990,
		gen: 9,
		isNonstandard: "Past",
	})

