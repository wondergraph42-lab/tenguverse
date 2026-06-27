({
    num: 9911,
   accuracy: 100,
   basePower: 45,
   category: "Special",
   name: "Lumin Beam",
   pp: 10,
   priority: 0,
   flags: { protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type) {
     if (type === "Ghost")
       return 1;
   },
   multihit: 2,
   secondary: {
    chance: 5,
    status: "par",
   },
   target: "normal",
   type: "Electric",
   contestType: "Cute"
 })

