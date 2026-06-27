LootJS.lootTables(event => {
    const tables = [
      "minecraft:chests/desert_pyramid",
      "minecraft:chests/igloo_chest",
      "minecraft:chests/jungle_temple",
      "minecraft:chests/nether_bridge",
      "minecraft:chests/pillager_outpost",
      "minecraft:chests/ruined_portal",
      "minecraft:chests/shipwreck_supply",
      "minecraft:chests/shipwreck_treasure",
      "minecraft:chests/simple_dungeon",
      "minecraft:chests/underwater_ruin_big",
      "minecraft:chests/underwater_ruin_small",
      "minecraft:chests/village/village_armorer",
      "minecraft:chests/village/village_butcher",
      "minecraft:chests/village/village_cartographer",
      "minecraft:chests/village/village_desert_house",
      "minecraft:chests/village/village_fisher",
      "minecraft:chests/village/village_fletcher",
      "minecraft:chests/village/village_mason",
      "minecraft:chests/village/village_plains_house",
      "minecraft:chests/village/village_savanna_house",
      "minecraft:chests/village/village_shepherd",
      "minecraft:chests/village/village_snowy_house",
      "minecraft:chests/village/village_taiga_house",
      "minecraft:chests/village/village_tannery",
      "minecraft:chests/village/village_temple",
      "minecraft:chests/village/village_toolsmith",
      "minecraft:chests/village/village_weaponsmith",
      "minecraft:archaeology/trail_ruins_common",
      "minecraft:archaeology/trail_ruins_rare",
      "minecraft:archaeology/desert_well",
      "dungeoncrawl:chests/stage_1",
      "dungeoncrawl:chests/stage_2",
      "dungeoncrawl:chests/stage_3"
    ];



    tables.forEach(tableId => {
      event.getLootTable(tableId)
        .firstPool()
        // HARD REMOVE (trop OP / casse la progression early)
        .removeItem('artifacts:everlasting_beef')
        .removeItem('artifacts:eternal_steak')
        .removeItem('artifacts:helium_flamingo')
        .removeItem('cobblemon:master_ball')

        // VANILLA / FILLER très safe (dilution du loot)
        .addEntry(LootEntry.of('minecraft:oak_log').withWeight(4))
        .addEntry(LootEntry.of('minecraft:spruce_log').withWeight(4))
        .addEntry(LootEntry.of('minecraft:birch_log').withWeight(4))
        .addEntry(LootEntry.of('minecraft:jungle_log').withWeight(3))
        .addEntry(LootEntry.of('minecraft:acacia_log').withWeight(3))
        .addEntry(LootEntry.of('minecraft:dark_oak_log').withWeight(3))
        .addEntry(LootEntry.of('minecraft:mangrove_log').withWeight(2))
        .addEntry(LootEntry.of('minecraft:cherry_log').withWeight(2))
        .addEntry(LootEntry.of('minecraft:bamboo_block').withWeight(2))
        .addEntry(LootEntry.of('minecraft:oak_planks').withWeight(3))
        .addEntry(LootEntry.of('minecraft:spruce_planks').withWeight(3))
        .addEntry(LootEntry.of('minecraft:birch_planks').withWeight(3))
        .addEntry(LootEntry.of('minecraft:jungle_planks').withWeight(2.5))
        .addEntry(LootEntry.of('minecraft:acacia_planks').withWeight(2.5))
        .addEntry(LootEntry.of('minecraft:dark_oak_planks').withWeight(2.5))
        .addEntry(LootEntry.of('minecraft:mangrove_planks').withWeight(2))
        .addEntry(LootEntry.of('minecraft:cherry_planks').withWeight(2))
        .addEntry(LootEntry.of('minecraft:bamboo_planks').withWeight(2))
        .addEntry(LootEntry.of('minecraft:charcoal').withWeight(3))
        .addEntry(LootEntry.of('minecraft:rotten_flesh').withWeight(4))
        .addEntry(LootEntry.of('minecraft:spider_eye').withWeight(2.5))
        .addEntry(LootEntry.of('minecraft:gunpowder').withWeight(2.5))
        .addEntry(LootEntry.of('minecraft:name_tag').withWeight(0.2))
        .addEntry(LootEntry.of('minecraft:lead').withWeight(0.3))
        .addEntry(LootEntry.of('minecraft:spore_blossom').withWeight(0.2))
        .addEntry(LootEntry.of('minecraft:suspicious_sand').withWeight(0.4))
        .addEntry(LootEntry.of('minecraft:cooked_beef').withWeight(8))      // 10 → -20%
        .addEntry(LootEntry.of('minecraft:cooked_porkchop').withWeight(8)) // 10 → -20%
        .addEntry(LootEntry.of('minecraft:bread').withWeight(10))
        .addEntry(LootEntry.of('minecraft:pumpkin_pie').withWeight(6))     // 8 → -25%
        .addEntry(LootEntry.of('minecraft:apple').withWeight(8))
        .addEntry(LootEntry.of('minecraft:cake').withWeight(2))            // 3 → -33%
        .addEntry(LootEntry.of('minecraft:baked_potato').withWeight(7))    // 9 → -22%
        .addEntry(LootEntry.of('minecraft:sweet_berries').withWeight(8))
        .addEntry(LootEntry.of('minecraft:golden_apple').withWeight(0.2))  // 0.3 → -33%
        .addEntry(LootEntry.of('minecraft:ender_pearl').withWeight(0.4))   // 0.5 → -20%
        .addEntry(LootEntry.tag('minecraft:planks').withWeight(8))         // 10 → -20%
        .addEntry(LootEntry.tag('forge:cobblestone').withWeight(7))        // 9 → -22%
        .addEntry(LootEntry.tag('forge:sand').withWeight(6))               // 8 → -25%
        .addEntry(LootEntry.tag('minecraft:saplings').withWeight(6))
        .addEntry(LootEntry.tag('minecraft:seeds').withWeight(6))
        .addEntry(LootEntry.tag('minecraft:flowers').withWeight(6))
        .addEntry(LootEntry.of('minecraft:string').withWeight(5))
        .addEntry(LootEntry.of('minecraft:leather').withWeight(5))
        .addEntry(LootEntry.of('minecraft:coal').withWeight(4))
        .addEntry(LootEntry.of('minecraft:dried_kelp').withWeight(6))      // 7 → -14%
        .addEntry(LootEntry.of('minecraft:paper').withWeight(4))
        .addEntry(LootEntry.of('minecraft:clay_ball').withWeight(5))
        .addEntry(LootEntry.of('minecraft:bamboo').withWeight(3))
        .addEntry(LootEntry.of('minecraft:sugar').withWeight(5))
        .addEntry(LootEntry.of('minecraft:stick').withWeight(6))
        .addEntry(LootEntry.of('minecraft:bone').withWeight(3))
        .addEntry(LootEntry.of('minecraft:feather').withWeight(4))
        .addEntry(LootEntry.of('minecraft:honey_bottle').withWeight(1.2))  // 1.5 → -20%
        .addEntry(LootEntry.of('minecraft:torch').withWeight(6))
        .addEntry(LootEntry.of('minecraft:map').withWeight(1.0))           // 1.2 → -16%
        .addEntry(LootEntry.of('minecraft:flower_pot').withWeight(1))
        .addEntry(LootEntry.of('minecraft:suspicious_stew').withWeight(1))
        .addEntry(LootEntry.tag('minecraft:wool').withWeight(4))
        .addEntry(LootEntry.tag('minecraft:leaves').withWeight(3))
        .addEntry(LootEntry.tag('c:music_discs').withWeight(0.15))         // 0.2 → -25%
        .addEntry(LootEntry.tag('minecraft:buttons').withWeight(3))
        .addEntry(LootEntry.of('minecraft:campfire').withWeight(0.6))      // 0.7 → -14%
        .addEntry(LootEntry.of('minecraft:painting').withWeight(0.4))      // 0.5 → -20%
        .addEntry(LootEntry.of('minecraft:flint').withWeight(4))
        .addEntry(LootEntry.of('minecraft:iron_nugget').withWeight(2.2))   // 2.5 → -12%
        .addEntry(LootEntry.tag('c:dyed').withWeight(3))
        .addEntry(LootEntry.of('minecraft:bucket').withWeight(0.5))
        .addEntry(LootEntry.of('minecraft:lantern').withWeight(0.6))       // 0.7 → -14%
        .addEntry(LootEntry.of('minecraft:book').withWeight(1.6))          // 1.8 → -11%
        .addEntry(LootEntry.of('minecraft:compass').withWeight(0.25))      // 0.3 → -16%
        .addEntry(LootEntry.tag('minecraft:beds').withWeight(1))
        .addEntry(LootEntry.tag('c:tools').withWeight(1.2))                // 1.5 → -20%
        .addEntry(LootEntry.tag('c:dyes').withWeight(3))

        // COBBLEMON scaling différencié

        .addEntry(LootEntry.of('cobblemon:poke_ball').withWeight(3.2))          // +21%
        .addEntry(LootEntry.of('cobblemon:azure_ball').withWeight(3))
        .addEntry(LootEntry.of('cobblemon:verdant_ball').withWeight(3))
        .addEntry(LootEntry.of('cobblemon:roseate_ball').withWeight(3))
        .addEntry(LootEntry.of('cobblemon:slate_ball').withWeight(3))
        .addEntry(LootEntry.of('cobblemon:citrine_ball').withWeight(3))
        .addEntry(LootEntry.of('cobblemon:great_ball').withWeight(0.95))        // +32%

        .addEntry(LootEntry.of('cobblemon:ultra_ball').withWeight(0.28))        // +27%
        .addEntry(LootEntry.of('cobblemon:luxury_ball').withWeight(0.075))      // +36%
        .addEntry(LootEntry.of('cobblemon:premier_ball').withWeight(0.15))      // +36%

        .addEntry(LootEntry.of('cobblemon:quick_ball').withWeight(0.17))        // +29%
        .addEntry(LootEntry.of('cobblemon:timer_ball').withWeight(0.17))
        .addEntry(LootEntry.of('cobblemon:dusk_ball').withWeight(0.17))
        .addEntry(LootEntry.of('cobblemon:friend_ball').withWeight(0.17))
        .addEntry(LootEntry.of('cobblemon:repeat_ball').withWeight(0.17))
        .addEntry(LootEntry.of('cobblemon:net_ball').withWeight(0.17))
        .addEntry(LootEntry.of('cobblemon:nest_ball').withWeight(0.17))
        .addEntry(LootEntry.of('cobblemon:heal_ball').withWeight(0.17))

        .addEntry(LootEntry.of('cobblemon:level_ball').withWeight(0.13))        // +36%
        .addEntry(LootEntry.of('cobblemon:fast_ball').withWeight(0.09))         // +36%
        .addEntry(LootEntry.of('cobblemon:moon_ball').withWeight(0.09))
        .addEntry(LootEntry.of('cobblemon:dive_ball').withWeight(0.09))

        .addEntry(LootEntry.of('cobblemon:sport_ball').withWeight(0.06))        // +36%
        .addEntry(LootEntry.of('cobblemon:safari_ball').withWeight(0.06))
        .addEntry(LootEntry.of('cobblemon:dream_ball').withWeight(0.06))

        // Soins basiques +18%
        .addEntry(LootEntry.of('cobblemon:potion').withWeight(1.65))
        .addEntry(LootEntry.of('cobblemon:super_potion').withWeight(0.71))
        .addEntry(LootEntry.of('cobblemon:antidote').withWeight(0.94))
        .addEntry(LootEntry.of('cobblemon:paralyze_heal').withWeight(0.94))
        .addEntry(LootEntry.of('cobblemon:awakening').withWeight(0.94))
        .addEntry(LootEntry.of('cobblemon:burn_heal').withWeight(0.94))
        .addEntry(LootEntry.of('cobblemon:ice_heal').withWeight(0.94))

        // Soins puissants +8%
        .addEntry(LootEntry.of('cobblemon:hyper_potion').withWeight(0.162))
        .addEntry(LootEntry.of('cobblemon:max_potion').withWeight(0.054))
        .addEntry(LootEntry.of('cobblemon:full_restore').withWeight(0.054))
        .addEntry(LootEntry.of('cobblemon:full_heal').withWeight(0.108))

        // Exp candies +15%
        .addEntry(LootEntry.of('cobblemon:exp_candy_xs').withWeight(0.92))
        .addEntry(LootEntry.of('cobblemon:exp_candy_s').withWeight(0.403))
        .addEntry(LootEntry.of('cobblemon:exp_candy_m').withWeight(0.138))

        // Pierres d’évolution communes +15%
        .addEntry(LootEntry.of('cobblemon:fire_stone').withWeight(0.092))
        .addEntry(LootEntry.of('cobblemon:water_stone').withWeight(0.092))
        .addEntry(LootEntry.of('cobblemon:thunder_stone').withWeight(0.092))
        .addEntry(LootEntry.of('cobblemon:leaf_stone').withWeight(0.092))
        .addEntry(LootEntry.of('cobblemon:moon_stone').withWeight(0.092))
        .addEntry(LootEntry.of('cobblemon:sun_stone').withWeight(0.092))

        // Pierres rares et objets d’évolution +8%
        .addEntry(LootEntry.of('cobblemon:shiny_stone').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:dusk_stone').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:dawn_stone').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:ice_stone').withWeight(0.043))

        .addEntry(LootEntry.of('cobblemon:oval_stone').withWeight(0.162))
        .addEntry(LootEntry.of('cobblemon:everstone').withWeight(0.162))
        .addEntry(LootEntry.of('cobblemon:metal_coat').withWeight(0.054))
        .addEntry(LootEntry.of('cobblemon:dragon_scale').withWeight(0.054))
        .addEntry(LootEntry.of('cobblemon:deep_sea_tooth').withWeight(0.054))
        .addEntry(LootEntry.of('cobblemon:deep_sea_scale').withWeight(0.054))
        .addEntry(LootEntry.of('cobblemon:dubious_disc').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:razor_claw').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:razor_fang').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:reaper_cloth').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:protector').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:electirizer').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:magmarizer').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:prism_scale').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:sachet').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:whipped_dream').withWeight(0.043))
        .addEntry(LootEntry.of('cobblemon:black_augurite').withWeight(0.032))

        // Revives, ethers, elixirs +10%
        .addEntry(LootEntry.of('cobblemon:revive').withWeight(0.088))
        .addEntry(LootEntry.of('cobblemon:max_revive').withWeight(0.033))
        .addEntry(LootEntry.of('cobblemon:heal_powder').withWeight(0.066))
        .addEntry(LootEntry.of('cobblemon:energy_root').withWeight(0.066))
        .addEntry(LootEntry.of('cobblemon:syrupy_apple').withWeight(0.05))
        .addEntry(LootEntry.of('cobblemon:revival_herb').withWeight(0.044))
        .addEntry(LootEntry.of('cobblemon:ether').withWeight(0.088))
        .addEntry(LootEntry.of('cobblemon:max_ether').withWeight(0.033))
        .addEntry(LootEntry.of('cobblemon:elixir').withWeight(0.088))
        .addEntry(LootEntry.of('cobblemon:max_elixir').withWeight(0.033))


        // AUTRES MODS
        .addEntry(LootEntry.of('create:andesite_alloy').withWeight(1.0))
        .addEntry(LootEntry.of('create:shaft').withWeight(1.0))
        .addEntry(LootEntry.of('create:cogwheel').withWeight(1.0))
        .addEntry(LootEntry.of('create:brass_ingot').withWeight(0.4))
        .addEntry(LootEntry.of('create:mechanical_bearing').withWeight(0.15))
        .addEntry(LootEntry.of('create:deployer').withWeight(0.15))

        .addEntry(LootEntry.of('farmersdelight:cutting_board').withWeight(0.8))
        .addEntry(LootEntry.of('farmersdelight:canvas').withWeight(1))
        .addEntry(LootEntry.of('farmersdelight:stuffed_potato').withWeight(2))

        .addEntry(LootEntry.of('supplementaries:jar').withWeight(1))
        .addEntry(LootEntry.of('supplementaries:hourglass').withWeight(0.15))
        .addEntry(LootEntry.of('supplementaries:globe').withWeight(0.15))
        .addEntry(LootEntry.of('supplementaries:bomb').withWeight(0.02))

        .addEntry(LootEntry.tag('c:tools/brush').withWeight(0.5))

        .addEntry(LootEntry.of('immersiveengineering:blueprint').withWeight(0.08))

        .addEntry(LootEntry.of('sophisticatedbackpacks:upgrade_base').withWeight(0.25))
        .addEntry(LootEntry.of('sophisticatedstorage:upgrade_base').withWeight(0.25))

        .addEntry(LootEntry.of('xpbook:xp_tome').withWeight(0.1))
        .addEntry(LootEntry.of('luggage:luggage').withWeight(0.03))
        .addEntry(LootEntry.of('cookingforblockheads:recipe_book').withWeight(0.3))

        // Monnaie interne
        .addEntry(LootEntry.of('cobblemonrealms:realms_coin').withWeight(0.03))

        // Fragments méga (rares)
        .addEntry(LootEntry.of('mega_showdown:bug_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:dark_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:dragon_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:electric_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:fairy_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:fighting_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:fire_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:flying_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:ghost_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:grass_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:ground_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:ice_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:normal_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:poison_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:psychic_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:rock_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:steel_tera_shard').withWeight(0.096))
        .addEntry(LootEntry.of('mega_showdown:water_tera_shard').withWeight(0.096))

    });
});
