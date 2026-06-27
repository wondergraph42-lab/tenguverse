({
    num: 9920,
   accuracy: 100,
   basePower: 55,
   category: "Physical",
   name: "Tempest Slash",
   pp: 10,
   priority: 0,
   flags: { protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Dragon') return;
			if (!target) return;
			if (!target.runImmunity('Dragon')) {
				if (target.hasType('Fairy')) return 1;
			}
		},

   multihit: 2,
   ignoreImmunity: {'Dragon': true},
   secondary: null,
   target: "normal",
   type: "Dragon",
   contestType: "Tough"
 })

