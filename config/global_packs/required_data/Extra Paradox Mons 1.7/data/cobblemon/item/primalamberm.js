({
		name: "Primal Amber M",
		spritenum: 9987,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Magmathorn') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Magmathorn-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Magmathorn') return false;
			return true;
		},
		itemUser: ["Magmathorn"],
		num: 9987,
		gen: 9,
		isNonstandard: "Past",
	}
)

