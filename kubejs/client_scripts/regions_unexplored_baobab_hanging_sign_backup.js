const problematicItem = 'regions_unexplored:baobab_hanging_sign'

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  event.remove(problematicItem)
})
