({
	  num: 9919,
   accuracy: 90,
   basePower: 110,
   category: "Physical",
   name: "Spectral Maul",
   pp: 10,
   priority: 0,
  flags: { protect: 1, contact: 1, charge: 1, mirror: 1, metronome: 1, noassist: 1, failinstruct: 1},
		breaksProtect: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability: false,
		},

   secondary: {
    chance: 100,
    status: "par",
    volatileStatus: 'flinch',
  },
   target: "normal",
   type: "Dragon",
   contestType: "Tough"
 })

