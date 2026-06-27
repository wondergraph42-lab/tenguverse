({
    num: 9928,
   accuracy: 100,
   basePower: 0,
   category: "Status",
   name: "Wicked Wish",
   pp: 10,
   priority: 1,
   flags: { protect: 1, snatch: 1, mirror: 1, metronome: 1 },
   secondary: {
     chance: 100,
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
   type: "Dark",
   contestType: "Clever"
 })

