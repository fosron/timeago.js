module.exports = function(number, index) {
  return [
    ['ką tik', 'prieš kurį laiką'],
    ['prieš %s sekundžių(-es)', 'už %s sekundžių'],
    ['prieš minutę', 'už 1 minutės'],
    ['prieš %s minutę(-s)', 'už %s minučių'],
    ['prieš valandą', 'už valandos'],
    ['prieš %s valandas(-ų)', 'už %s valandų'],
    ['prieš dieną', 'už dienos'],
    ['prieš %s dienas(-ų)', 'už %s dienų'],
    ['prieš savaitę', 'už savaitės'],
    ['prieš %s savaitę(-es)', 'už %s'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years']
  ][index];
}
