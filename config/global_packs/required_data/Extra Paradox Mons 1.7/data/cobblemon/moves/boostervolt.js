({
	    num: 9902,
   accuracy: 95,
   basePower: 90,
   category: "Special",
   name: "Booster Volt",
   pp: 10,
   priority: 0,
   flags: { protect: 1, mirror: 1, metronome: 1 },
   onAfterHit(target, source) {
    if (this.field.isTerrain('electricterrain')) {
      this.boost({ spa: 1 }, source);
    }
  },
   secondary: null,
   target: "normal",
   type: "Electric",
   contestType: "Cool"
 })

