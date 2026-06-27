({
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Originwrym' || pokemon.transformed) return;
			let forme = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
            case 'orichalcumpulse':
				if (pokemon.species.id !== 'originwyrmpast') forme = 'Originwyrm-Past';
				break;
			case 'electricterrain':
            case 'hadronengine':
				if (pokemon.species.id !== 'originwrymfuture') forme = 'Originwrym-Future';
				break;
			default:
				if (pokemon.species.id !== 'originwrym') forme = 'Originwyrm';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
			}
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1},
		name: "Apex Drive",
		rating: 5,
		num: 9900,
	})
