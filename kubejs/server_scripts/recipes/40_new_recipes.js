ServerEvents.recipes(event => {

  event.shaped(
    Item.of('cobblemon:great_ball', 3),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#cobblemon:tier_1_poke_balls',
      B: 'cobblemon:blue_apricorn'
    })

  event.shaped(
    Item.of('cobblemon:ultra_ball', 3),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#cobblemon:tier_2_poke_balls',
      B: 'cobblemon:yellow_apricorn'
    })

  event.shaped(
    Item.of('mega_showdown:star_core'),
    [
      'ACB',
      'CDC',
      'ACB'
    ],
    {
      A: 'cobblemon:poison_gem',
      B: 'cobblemon:dark_gem',
      C: 'minecraft:obsidian',
      D: 'mega_showdown:wishing_star'
    })

  event.shaped(
    Item.of('minecraft:copper_ingot'),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'create:copper_nugget'
    })

})
