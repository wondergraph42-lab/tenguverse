({
    num: 9905,
   accuracy: 100,
   basePower: 65,
   category: "Special",
   name: "Dual Hoof",
   pp: 15,
   priority: 0,
   flags: { protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type) {
     if (type === "Dark")
       return 1;
   },
   multihit: 2,
   secondary: null,
   target: "normal",
   type: "Water",
   contestType: "Tough"
 })

