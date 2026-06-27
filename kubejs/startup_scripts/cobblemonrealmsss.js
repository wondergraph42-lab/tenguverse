console.info('Hello Cobblemon Realms Player! (Loaded startup scripts)')

StartupEvents.registry('item', event => {

  //Cobblemon Realms
  event.create('realms_coin').displayName('Realms Coin').rarity('Epic')


})

ItemEvents.modification(event => {

})

StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Cobblemon Realms'; });
