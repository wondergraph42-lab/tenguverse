({
		name: "Drill USB",
		spritenum: 9991,
		megaStone: "Iron Drill-Mega",
		megaEvolves: "Iron Drill",
		itemUser: ["Iron Drill"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 9991,
		gen: 9,
		isNonstandard: "Past",
	})

