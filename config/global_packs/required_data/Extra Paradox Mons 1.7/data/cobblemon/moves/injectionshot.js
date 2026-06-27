({
    num: 9908,
   accuracy: 100,
   basePower: 35,
   category: "Physical",
   name: "Injection Shot",
   pp: 10,
   priority: 0,
   flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type) {
     if (type === "Bug")
       return 1;
   },
  multihit: 3,
   secondary: {
     chance: 15,
     onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('psn', source);
				}
			}
   },
   target: "normal",
   type: "Psychic",
   contestType: "Clever"
 })

