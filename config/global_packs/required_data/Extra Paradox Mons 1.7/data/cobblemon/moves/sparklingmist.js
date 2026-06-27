({
    num: 9918,
   accuracy: 100,
   basePower: 70,
   category: "Special",
   name: "Sparkling Mist",
   pp: 10,
   priority: 1,
   flags: { mirror: 1, metronome: 1 },
   breaksProtect: true,
   secondary: {
     chance: 10,
     onHit(target, source) {
				const result = this.random(2);
				if (result === 0) {
					target.trySetStatus('slp', source);
				} else if (result === 1) {
					target.trySetStatus('psn', source);
				}
			}
   },
   target: "allAdjacentFoes",
   type: "Poison",
   contestType: "Beautiful"
 })

