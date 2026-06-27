({
    num: 9907,
   accuracy: 90,
   basePower: 110,
   category: "Physical",
   name: "Horror Maw",
   pp: 10,
   priority: 0,
   flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },
   onHit(target, source, move) {
			source.addVolatile('trapped', target, move, 'trapper');
			target.addVolatile('trapped', source, move, 'trapper');
		},
   secondary: {
    chance: 20,
    volatileStatus: 'flinch',
  },
   target: "normal",
   type: "Dark",
   contestType: "Tough"
 })

