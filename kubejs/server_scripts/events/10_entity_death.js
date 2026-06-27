EntityEvents.death(event => {
  const entity = event.entity;
  const source = event.source;


  if (entity.type == 'minecraft:ender_dragon') {

    const killer = source.attacker;
    if (killer && killer.isPlayer()) {

      killer.give(Item.of('minecraft:dragon_egg'));
    }
  }
});
