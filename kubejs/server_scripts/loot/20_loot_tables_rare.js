LootJS.lootTables(event => {
  const tables = [
    "minecraft:chests/abandoned_mineshaft",
    "minecraft:chests/ancient_city",
    "minecraft:chests/ancient_city_ice_box",
    "minecraft:chests/bastion_bridge",
    "minecraft:chests/bastion_hoglin_stable",
    "minecraft:chests/bastion_other",
    "minecraft:chests/desert_pyramid",
    "minecraft:chests/end_city_treasure",
    "minecraft:chests/igloo_chest",
    "minecraft:chests/jungle_temple",
    "minecraft:chests/nether_bridge",
    "minecraft:chests/ruined_portal",
    "minecraft:chests/shipwreck_treasure",
    "minecraft:chests/simple_dungeon",
    "minecraft:chests/stronghold_corridor",
    "minecraft:chests/stronghold_crossing",
    "minecraft:chests/stronghold_library",
    "minecraft:chests/underwater_ruin_big",
    "minecraft:chests/woodland_mansion",
    "minecraft:chests/trial_chambers/corridor",
    "minecraft:chests/trial_chambers/entrance",
    "minecraft:chests/trial_chambers/intersection",
    "minecraft:chests/trial_chambers/intersection_barrel",
    "minecraft:chests/trial_chambers/reward_common",
    "minecraft:chests/trial_chambers/reward_ominous_common",
    "minecraft:chests/trial_chambers/reward_ominous_rare",
    "minecraft:chests/trial_chambers/reward_ominous_unique",
    "minecraft:chests/trial_chambers/reward_rare",
    "minecraft:chests/trial_chambers/reward_unique",
    "minecraft:chests/trial_chambers/supply",
    "minecraft:archaeology/trail_ruins_common",
    "minecraft:archaeology/trail_ruins_rare",
    "minecraft:archaeology/desert_well",
    "dungeoncrawl:chests/stage_3",
    "dungeoncrawl:chests/stage_4",
    "dungeoncrawl:chests/stage_5"
  ];
  
tables.forEach(tableId => {
  event.getLootTable(tableId)
      .firstPool()
   // VANILLA & UTILES (rares mais pas cassés)
      .addEntry(LootEntry.of('minecraft:diamond').withWeight(0.26))
      .addEntry(LootEntry.of('minecraft:emerald').withWeight(0.52))
      .addEntry(LootEntry.of('minecraft:netherite_scrap').withWeight(0.05))
      .addEntry(LootEntry.of('minecraft:ancient_debris').withWeight(0.055))
      .addEntry(LootEntry.of('minecraft:echo_shard').withWeight(0.65))
      .addEntry(LootEntry.of('minecraft:heart_of_the_sea').withWeight(0.01))
      .addEntry(LootEntry.of('minecraft:totem_of_undying').withWeight(0.011))
      .addEntry(LootEntry.of('minecraft:enchanted_golden_apple').withWeight(0.0055))
      .addEntry(LootEntry.of('minecraft:golden_apple').withWeight(0.325))
      .addEntry(LootEntry.of('minecraft:trident').withWeight(0.022))
      .addEntry(LootEntry.of('minecraft:lodestone').withWeight(0.078))
      .addEntry(LootEntry.of('minecraft:respawn_anchor').withWeight(0.104))
      .addEntry(LootEntry.of('minecraft:shulker_shell').withWeight(0.039))
      .addEntry(LootEntry.of('minecraft:dragon_breath').withWeight(0.104))
      .addEntry(LootEntry.of('minecraft:enchanted_book').withWeight(0.455))
      .addEntry(LootEntry.of('minecraft:name_tag').withWeight(0.52))
      .addEntry(LootEntry.of('minecraft:saddle').withWeight(0.325))
      .addEntry(LootEntry.of('minecraft:amethyst_shard').withWeight(1.0))
      .addEntry(LootEntry.of('minecraft:blaze_powder').withWeight(0.325))
      .addEntry(LootEntry.of('minecraft:nautilus_shell').withWeight(0.104))
      .addEntry(LootEntry.of('minecraft:experience_bottle').withWeight(0.195))
      .addEntry(LootEntry.of('minecraft:ghast_tear').withWeight(0.156))      

      // COBBLEMON UTILE MAIS NERFÉ (très dilué)
      .addEntry(LootEntry.of("cobblemon:poke_ball").withWeight(1.8))          // +20%
      .addEntry(LootEntry.of("cobblemon:great_ball").withWeight(0.65))        // +30%
      .addEntry(LootEntry.of("cobblemon:ultra_ball").withWeight(0.25))        // +38%
      .addEntry(LootEntry.of("cobblemon:luxury_ball").withWeight(0.11))       // +37%
      .addEntry(LootEntry.of("cobblemon:premier_ball").withWeight(0.26))      // +30%
      .addEntry(LootEntry.of("cobblemon:quick_ball").withWeight(0.14))        // +40%
      .addEntry(LootEntry.of("cobblemon:timer_ball").withWeight(0.14))        // +40%
      .addEntry(LootEntry.of("cobblemon:dusk_ball").withWeight(0.145))        // +39%
      .addEntry(LootEntry.of("cobblemon:repeat_ball").withWeight(0.145))      // +39%
      .addEntry(LootEntry.of("cobblemon:heal_ball").withWeight(0.105))        // +35%
      .addEntry(LootEntry.of("cobblemon:level_ball").withWeight(0.09))        // +38%
      .addEntry(LootEntry.of("cobblemon:fast_ball").withWeight(0.072))        // +38%
      .addEntry(LootEntry.of("cobblemon:moon_ball").withWeight(0.072))        // +38%
      .addEntry(LootEntry.of("cobblemon:dive_ball").withWeight(0.072))        // +38%
      .addEntry(LootEntry.of("cobblemon:safari_ball").withWeight(0.055))      // +41%
      .addEntry(LootEntry.of("cobblemon:dream_ball").withWeight(0.055))       // +41%

      .addEntry(LootEntry.of('cobblemon:heavy_ball').withWeight(0.06))
      .addEntry(LootEntry.of('cobblemon:love_ball').withWeight(0.06))
      .addEntry(LootEntry.of('cobblemon:lure_ball').withWeight(0.06))
      .addEntry(LootEntry.of('cobblemon:park_ball').withWeight(0.05))
      .addEntry(LootEntry.of('cobblemon:cherish_ball').withWeight(0.035))
      .addEntry(LootEntry.of('cobblemon:beast_ball').withWeight(0.025))

      // Ancient balls (expanded instead of tag)
      .addEntry(LootEntry.of('cobblemon:ancient_poke_ball').withWeight(0.08))
      .addEntry(LootEntry.of('cobblemon:ancient_great_ball').withWeight(0.065))
      .addEntry(LootEntry.of('cobblemon:ancient_ultra_ball').withWeight(0.05))

      .addEntry(LootEntry.of('cobblemon:ancient_heavy_ball').withWeight(0.045))
      .addEntry(LootEntry.of('cobblemon:ancient_feather_ball').withWeight(0.045))
      .addEntry(LootEntry.of('cobblemon:ancient_wing_ball').withWeight(0.045))

      .addEntry(LootEntry.of('cobblemon:ancient_jet_ball').withWeight(0.035))
      .addEntry(LootEntry.of('cobblemon:ancient_gigaton_ball').withWeight(0.03))
      .addEntry(LootEntry.of('cobblemon:ancient_leaden_ball').withWeight(0.035))

      .addEntry(LootEntry.of('cobblemon:ancient_origin_ball').withWeight(0.02))
      .addEntry(LootEntry.of('cobblemon:ancient_ivory_ball').withWeight(0.03))

      .addEntry(LootEntry.of('cobblemon:exp_candy_xs').withWeight(0.62).setCount([1, 4]))   // +19%
      .addEntry(LootEntry.of('cobblemon:exp_candy_s').withWeight(0.43).setCount([1, 2]))    // +32%
      .addEntry(LootEntry.of('cobblemon:exp_candy_m').withWeight(0.145))                   // +39%
      .addEntry(LootEntry.of('cobblemon:exp_candy_l').withWeight(0.06))                    // +54%
      .addEntry(LootEntry.of('cobblemon:exp_candy_xl').withWeight(0.019))                  // +58%

      .addEntry(LootEntry.of("cobblemon:potion").withWeight(0.9))                         // +15%
      .addEntry(LootEntry.of("cobblemon:super_potion").withWeight(0.6))                   // +32%
      .addEntry(LootEntry.of("cobblemon:hyper_potion").withWeight(0.2))                   // +39%
      .addEntry(LootEntry.of("cobblemon:max_potion").withWeight(0.075))                   // +56%
      .addEntry(LootEntry.of("cobblemon:full_restore").withWeight(0.06))                  // +54%

      .addEntry(LootEntry.of("cobblemon:antidote").withWeight(0.75))                      // +15%
      .addEntry(LootEntry.of("cobblemon:paralyze_heal").withWeight(0.75))                 // +15%
      .addEntry(LootEntry.of("cobblemon:awakening").withWeight(0.75))                     // +15%
      .addEntry(LootEntry.of("cobblemon:burn_heal").withWeight(0.75))                     // +15%
      .addEntry(LootEntry.of("cobblemon:ice_heal").withWeight(0.75))                      // +15%
      .addEntry(LootEntry.of("cobblemon:full_heal").withWeight(0.29))                     // +45%

      .addEntry(LootEntry.of("cobblemon:fire_stone").withWeight(0.078))
      .addEntry(LootEntry.of("cobblemon:water_stone").withWeight(0.078))
      .addEntry(LootEntry.of("cobblemon:thunder_stone").withWeight(0.078))
      .addEntry(LootEntry.of("cobblemon:leaf_stone").withWeight(0.078))
      .addEntry(LootEntry.of("cobblemon:moon_stone").withWeight(0.078))
      .addEntry(LootEntry.of("cobblemon:sun_stone").withWeight(0.078))
      .addEntry(LootEntry.of("cobblemon:shiny_stone").withWeight(0.039))
      .addEntry(LootEntry.of("cobblemon:dusk_stone").withWeight(0.039))
      .addEntry(LootEntry.of("cobblemon:dawn_stone").withWeight(0.039))
      .addEntry(LootEntry.of("cobblemon:ice_stone").withWeight(0.039))

      .addEntry(LootEntry.of("cobblemon:oval_stone").withWeight(0.17))        // +31%
      .addEntry(LootEntry.of("cobblemon:everstone").withWeight(0.17))         // +31%
      .addEntry(LootEntry.of("cobblemon:metal_coat").withWeight(0.072))       // +38%
      .addEntry(LootEntry.of("cobblemon:dragon_scale").withWeight(0.072))     // +38%
      .addEntry(LootEntry.of("cobblemon:deep_sea_tooth").withWeight(0.072))   // +38%
      .addEntry(LootEntry.of("cobblemon:deep_sea_scale").withWeight(0.072))   // +38%
      .addEntry(LootEntry.of("cobblemon:dubious_disc").withWeight(0.055))     // +41%
      .addEntry(LootEntry.of("cobblemon:razor_claw").withWeight(0.055))       // +41%
      .addEntry(LootEntry.of("cobblemon:razor_fang").withWeight(0.055))       // +41%
      .addEntry(LootEntry.of("cobblemon:reaper_cloth").withWeight(0.055))     // +41%
      .addEntry(LootEntry.of("cobblemon:protector").withWeight(0.055))        // +41%
      .addEntry(LootEntry.of("cobblemon:electirizer").withWeight(0.055))      // +41%
      .addEntry(LootEntry.of("cobblemon:magmarizer").withWeight(0.055))       // +41%
      .addEntry(LootEntry.of("cobblemon:prism_scale").withWeight(0.055))      // +41%
      .addEntry(LootEntry.of("cobblemon:sachet").withWeight(0.055))           // +41%
      .addEntry(LootEntry.of("cobblemon:whipped_dream").withWeight(0.055))    // +41%
      .addEntry(LootEntry.of("cobblemon:black_augurite").withWeight(0.035))   // +46%

      .addEntry(LootEntry.of("cobblemon:revive").withWeight(0.085))           // +41%
      .addEntry(LootEntry.of("cobblemon:max_revive").withWeight(0.032))       // +45%
      .addEntry(LootEntry.of("cobblemon:heal_powder").withWeight(0.09))       // +38%
      .addEntry(LootEntry.of("cobblemon:energy_root").withWeight(0.09))       // +38%
      .addEntry(LootEntry.of("cobblemon:revival_herb").withWeight(0.052))     // +44%

      .addEntry(LootEntry.of("cobblemon:ether").withWeight(0.11))             // +41%
      .addEntry(LootEntry.of("cobblemon:max_ether").withWeight(0.035))        // +46%
      .addEntry(LootEntry.of("cobblemon:elixir").withWeight(0.11))            // +41%
      .addEntry(LootEntry.of("cobblemon:max_elixir").withWeight(0.035))       // +46%

      // COBBLEMON UTILITY (mods annexes, nerf)
      .addEntry(LootEntry.of("cobblemon_utility:poketreat").withWeight(0.85))           // léger +
      .addEntry(LootEntry.of("cobblemon_utility:stalepoketreat").withWeight(1.2))       // arrondi +
      .addEntry(LootEntry.of("cobblemon_utility:shinycard").withWeight(0.1))             // arrondi clean
      .addEntry(LootEntry.of("cobblemon_utility:ballsynchronizer").withWeight(0.08))     // léger +
      .addEntry(LootEntry.of("cobblemon_utility:transmutationorb").withWeight(0.075))    // léger +
      .addEntry(LootEntry.of("cobblemon_utility:devolutionrelic").withWeight(0.075))     // léger +

      .addEntry(LootEntry.of("cobblemon_utility:woodencap").withWeight(0.3))             // arrondi +
      .addEntry(LootEntry.of("cobblemon_utility:hpsilvercap").withWeight(0.09))          // +15%
      .addEntry(LootEntry.of("cobblemon_utility:defsilvercap").withWeight(0.09))
      .addEntry(LootEntry.of("cobblemon_utility:speedsilvercap").withWeight(0.09))
      .addEntry(LootEntry.of("cobblemon_utility:spdefsilvercap").withWeight(0.09))
      .addEntry(LootEntry.of("cobblemon_utility:atksilvercap").withWeight(0.09))
      .addEntry(LootEntry.of("cobblemon_utility:spatksilvercap").withWeight(0.09))

      .addEntry(LootEntry.of("cobblemon_utility:voidcap").withWeight(0.055))             // léger +
      .addEntry(LootEntry.of('cobblemon_utility:atkobsidiancap').withWeight(0.045))      // +15%
      .addEntry(LootEntry.of('cobblemon_utility:spdefobsidiancap').withWeight(0.045))
      .addEntry(LootEntry.of('cobblemon_utility:spatkobsidiancap').withWeight(0.045))
      .addEntry(LootEntry.of('cobblemon_utility:defobsidiancap').withWeight(0.045))
      .addEntry(LootEntry.of('cobblemon_utility:speedobsidiancap').withWeight(0.045))
      .addEntry(LootEntry.of('cobblemon_utility:hpobsidiancap').withWeight(0.045))
      
      // Autres mods (rares mais présents)
      .addEntry(LootEntry.of('create:electron_tube').withWeight(0.15))
      .addEntry(LootEntry.of('create:precision_mechanism').withWeight(0.08))
      .addEntry(LootEntry.of('create:brass_block').withWeight(0.06))

      .addEntry(LootEntry.of('immersiveengineering:blueprint').withWeight(0.06))
      .addEntry(LootEntry.of('immersiveengineering:component_electronic').withWeight(0.15))
      .addEntry(LootEntry.of('immersiveengineering:ingot_steel').withWeight(0.25))

      .addEntry(LootEntry.of('supplementaries:wrench').withWeight(0.15))
      .addEntry(LootEntry.of('supplementaries:soap').withWeight(0.2))

      .addEntry(LootEntry.of('sophisticatedbackpacks:magnet_upgrade').withWeight(0.06))
      .addEntry(LootEntry.of('sophisticatedbackpacks:restock_upgrade').withWeight(0.03))
      .addEntry(LootEntry.of('sophisticatedbackpacks:void_upgrade').withWeight(0.015))

      .addEntry(LootEntry.of('xpbook:xp_tome').withWeight(0.12))

      // Méta & monnaie interne
      .addEntry(LootEntry.of('cobblemonrealms:realms_coin').withWeight(0.02))

      // Fragments méga (rares)
      .addEntry(LootEntry.of('mega_showdown:bug_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:dark_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:dragon_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:electric_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:fairy_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:fighting_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:fire_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:flying_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:ghost_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:grass_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:ground_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:ice_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:normal_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:poison_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:psychic_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:rock_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:steel_tera_shard').withWeight(0.2))
      .addEntry(LootEntry.of('mega_showdown:water_tera_shard').withWeight(0.2));
  });
});
