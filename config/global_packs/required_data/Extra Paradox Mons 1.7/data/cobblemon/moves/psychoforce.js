({
    num: 9916,
   accuracy: 100,
   basePower: 95,
   category: "Special",
   name: "Psycho Force",
   pp: 10,
   priority: 0,
   flags: { protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type) {
     if (type === "Bug")
       return 1;
   },
   secondary: {
    chance: 10,
   volatileStatus: 'confusion', 
   },
   target: "allAdjacent",
   type: "Psychic",
   contestType: "Beautiful"
 })

