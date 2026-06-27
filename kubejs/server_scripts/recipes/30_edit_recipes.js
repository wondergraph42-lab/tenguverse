ServerEvents.recipes(event => {

  event.shaped(
    'explorerscompass:explorerscompass',
    [
      'AEA',
      'BCD',
      'AFA'
    ],
    {
      A: 'minecraft:cobweb',
      B: 'minecraft:diamond',
      C: 'minecraft:compass',
      D: 'minecraft:netherite_ingot',
      E: 'minecraft:gold_ingot',
      F: 'minecraft:emerald'
    })

  event.shaped(
    'naturescompass:naturescompass',
    [
      'AEA',
      'BCD',
      'AFA'
    ],
    {
      A: '#minecraft:saplings',
      B: 'minecraft:diamond',
      C: 'minecraft:compass',
      D: 'minecraft:netherite_ingot',
      E: 'minecraft:gold_ingot',
      F: 'minecraft:emerald'
    })

})
