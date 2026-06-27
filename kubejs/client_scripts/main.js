// Visit the wiki for more info - https://kubejs.com/
console.info('Hello Cobblemon Realms Player! (Loaded client scripts)')


ItemEvents.modifyTooltips(event => {
  event.add('kubejs:realms_coin',
    Text.gold('Quest Coin')
  );

  event.add('kubejs:realms_coin', {shift: false},
    Text.gray('Hold ')
      .append(Text.gold('[Shift] '))
      .append(Text.gray('for details.'))
  );

  event.add('kubejs:realms_coin', {shift: true},
    Text.white('Earned by completing ')
      .append(Text.gold('quests '))
      .append(Text.white('in the '))
      .append(Text.green('Quest Book.'))
  );

  event.add('kubejs:realms_coin', {shift: true},
    Text.white('Trade it in the ')
      .append(Text.gold('Realms Store'))
      .append(Text.white(' chapter of the '))
      .append(Text.green('Quest Book'))
      .append(Text.white(' for valuable '))
      .append(Text.gold('rewards.').bold(true))
  );
});






