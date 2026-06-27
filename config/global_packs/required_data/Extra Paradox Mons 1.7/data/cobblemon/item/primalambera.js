({
		name: "Primal Amber A",
		spritenum: 9986,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Aquapod') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Aquapod-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Aquapod') return false;
			return true;
		},
		itemUser: ["Aquapod"],
		num: 9986,
		gen: 9,
		isNonstandard: "Past",
	}
)

