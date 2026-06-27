({
    num: 9910,
   accuracy: true,
   basePower: 999,
   category: "Physical",
   name: "Justin Punch",
   pp: 999,
   priority: 5,
   flags: { protect: 1, mirror: 1, metronome: 1 },
   onEffectiveness(typeMod, target, type) {
     if (type === "Ghost")
       return 1;
   },
   multihit: 2,
   secondary: {
    chance: 100,
    status: "frz",
   },
   breaksProtect: true,
   noSketch: true,
   target: "normal",
   type: "Normal",
   contestType: "Cute"
 })

