({
    num: 9903,
   accuracy: true,
   basePower: 85,
   category: "Physical",
   name: "Diamond Drill",
   pp: 10,
   priority: 0,
   flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type) {
     if (type === "Ground")
       return 1;
   },
   secondary: null,
   target: "normal",
   type: "Steel",
   contestType: "Tough"
 })

