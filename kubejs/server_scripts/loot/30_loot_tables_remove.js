LootJS.lootTables(event => {
  event.getLootTable("minecraft:chests/simple_dungeon").firstPool().removeItem("cobblemon:relic_coin");
  event.getLootTable("minecraft:chests/simple_dungeon").firstPool().removeItem("minecraft:command_block");
  event.getLootTable("minecraft:chests/underwater_ruin_small").firstPool().removeItem("cobblemon:relic_coin")
  event.getLootTable("minecraft:chests/underwater_ruin_big").firstPool().removeItem("cobblemon:relic_coin")
  event.getLootTable("minecraft:chests/shipwreck_treasure").firstPool().removeItem("cobblemon:relic_coin")
  event.getLootTable("minecraft:chests/shipwreck_supply").firstPool().removeItem("cobblemon:relic_coin")
  event.getLootTable("minecraft:chests/shipwreck_map").firstPool().removeItem("cobblemon:relic_coin")
  event.getLootTable("minecraft:chests/ruined_portal").firstPool().removeItem("cobblemon:relic_coin")
  event.getLootTable("minecraft:archaeology/trail_ruins_common").firstPool().removeItem("cobblemon:relic_coin");
  event.getLootTable("minecraft:archaeology/trail_ruins_rare").firstPool().removeItem("cobblemon:relic_coin");
  event.getLootTable("minecraft:archaeology/desert_well").firstPool().removeItem("cobblemon:relic_coin");
});
