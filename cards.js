
var spells = [
  //name is name that appaers on view
  // logic is just a string that represents a function
  {
    name: 'Tech Boom',
    logic: 'techBoom',
    description: 'TechBoom is in town! Increase all valuations by 30%',
    rarity: 2,
    cost: 8,
    portait: 'a',
    category: 's'

  }, {
    name: 'Nasdaq Crash',
    logic: 'nasdaqCrash',
    description: 'tech companies are crashing! run! Cut all valuations by 30%',
    rarity: 1,
    cost: 6,
    portait: 'a',
    category: 's'

  }, {
    name: 'Agile Methodology',
    logic: 'agileMethodology',
    description: 'It\'s all about the burn-down chart! Units can attack twice this turn',
    rarity: 2,
    cost: 7,
    portait: 'a',
    category: 's'
  }, {
    name: 'Down Round',
    logic: 'downRound',
    description: 'Things aren\'t going so well. Lower your opponents valuation by 15%',
    rarity: 1,
    cost: 4,
    portait: 'a',
    category: 's'
  }, {
    name: 'Consultant',
    logic: 'consultant',
    description: 'Need some outside help. For the next three turns there are 2 more minions on the field',
    rarity: 1,
    cost: 3,
    portait: 'a',
    category: 's'
  }, {
    name: 'IPO',
    logic: 'ipo',
    description: 'Lets get rich (on paper)! Increases valuation and unit health and attack by 50% for next three turns only',
    rarity: 2,
    cost: 8,
    portait: 'a',
    category: 's'
  }, {
    name: 'On Ramp',
    logic: 'onRamp',
    description: 'Raise all units up one level up (junir > senior > legendary) as long as there is one unit of that kind',
    rarity: 1,
    cost: 6,
    portait: 'a',
    category: 's'

  }, {
    name: 'Unicorn',
    logic: 'unicorn',
    description: 'valuation becomes so high that you become invulnerable for two turns',
    rarity: 3,
    cost: 10,
    portait: 'a',
    category: 's'
  }, {
    name: 'Poach Employee',
    logic: 'poachEmployee',
    description: 'Take control of one of your opponents units',
    rarity: 1,
    cost: 8,
    portait: 'a',
    category: 's'

  }, {
    name: 'Copy Idea',
    logic: 'copyIdea',
    description: 'Copy your opponents idea, allowing you to cast their innate spell for the next three turns',
    rarity: 1,
    cost: 3,
    portait: 'a',
    category: 's'
  },{
    name: 'Rid Technical Debt',
    logic: 'technicalDebt',
    description: 'for every other turn that has passed, draw that many cards ',
    rarity: 2,
    cost: 6,
    portait: 'a',
    category: 's'
  },{
    name: 'Gone Viral',
    logic: 'goneViral',
    description: 'increase valuation by 50%, but your units are exhausted and can\'t attack this turn ',
    rarity: 1,
    cost: 5,
    portait: 'a',
    category: 's'
  },{
    name: 'Angel Round',
    logic: 'angelRound',
    description: 'Get a chance! if a unit takes damage that would kill it, bring it back to life',
    rarity: 2,
    cost: 6,
    portait: 'a',
    category: 's'
  },{
    name: 'Rapid Iteration',
    logic: 'rapidIteration',
    description: 'Fail fast, fail often. give unit Agile',
    rarity: 1,
    cost: 5,
    portait: 'a',
    category: 's'
  }


]




var minions = [{
    name: 'David Yang',
    logic: 'davidOrNimit',
    description: 'A Legendary Co-Founder. Inspiration:Summons a Fullstack Gradute; 3 if Nimit is around',
    rarity: 3,
    hitPoints: 8,
    attackPoints: 10,
    cost: 7,
    portait: 'a',
    category: 'founder'
  }, {
    name: 'Nimit Maaru',
    logic: 'davidOrNimit',
    description: 'A Legendary Co-Founder. Inspiration:Summons a Fullstack Gradute; 3 if David is around',
    rarity: 3,
    hitPoints: 10,
    attackPoints: 8,
    cost: 7,
    portait: 'a',
    category: 'founder'
  }, {
    name: 'Mark Zuckerburg',
    logic: 'Mark',
    description: 'A Legendary, young CEO-Founder. Inspiration: doubles all technical units attack for two turns',
    rarity: 3,
    hitPoints: 7,
    attackPoints: 7,
    cost: 6,
    portait: 'a',
    category: 'founder'
  }, {
    name: 'Fullstack Graduate',
    logic: 'fullstackGrad',
    description: 'A truly great engineer. Gains +1 attack and strength for each other Fullstack graduate, gains +2 with Nimit or David',
    rarity: 2,
    hitPoints: 6,
    attackPoints: 6,
    cost: 6,
    portait: 'a',
    category: 's'
  }, {
    name: 'Junior Front-End Engineer',
    logic: 'juniorFront',
    description: 'Learning the ropes, will become a senior in three turns',
    rarity: 0,
    hitPoints: 2,
    attackPoints: 4,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'Junior Back-End Engineer',
    logic: 'juniorBack',
    description: 'Learning the ropes, will become a senior in three turns',
    rarity: 0,
    hitPoints: 4,
    attackPoints: 2,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'Senior Front-end Engineer',
    logic: 'seniorFrontend',
    description: 'experienced front-end engineer with agile',
    rarity: 1,
    hitPoints: 2,
    attackPoints: 4,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'Senior Back-end Engineer',
    logic: 'seniorBackend',
    description: 'experienced back-end engineer with tuant',
    rarity: 1,
    hitPoints: 2,
    attackPoints: 4,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'productManager',
    logic: 'da',
    description: 'Always trying to make the product better, allows you to cast innate ability twice a turn',
    rarity: 1,
    hitPoints: 2,
    attackPoints: 4,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'Andreessen Horowitz',
    logic: 'andresen',
    description: 'The legendary VC, restore 5% valuation each turn',
    rarity: 3,
    hitPoints: 8,
    attackPoints: 7,
    cost: 7,
    portait: 'a',
    category: 's'
  }, {
    name: 'Fast mover',
    logic: 'initiave',
    description: 'a unit that gets things done, can attack on first turn ',
    rarity: 1,
    hitPoints: 3,
    attackPoints: 4,
    cost: 3,
    portait: 'a',
    category: 's'
  }, {
    name: 'AWS Ninja',
    logic: 'awsNinja',
    description: 'Uses AWS infrastrucute to make everything better: decreases cost of everything by 1',
    rarity: 2,
    hitPoints: 2,
    attackPoints: 4,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'Fortran Engineer',
    logic: '',
    description: 'These guys are still around?',
    rarity: 0,
    hitPoints: 3,
    attackPoints: 2,
    cost: 2,
    portait: 'a',
    category: 's'
  }, {
    name: 'designer',
    logic: 'da',
    description: 'if a front-end engineer is on the board both this card and that card gain agile, if its a senior front end this card gets agile + 2 h/a',
    rarity: 1,
    hitPoints: 4,
    attackPoints: 4,
    cost: 4,
    portait: 'a',
    category: 's'
  },{
    name: 'Generic CEO',
    logic: 'genericCeo',
    description: 'is powerful alone, lower health and attack by 1 for every allied unit',
    rarity: 1,
    hitPoints: 6,
    attackPoints: 6,
    cost: 4,
    portait: 'a',
    category: 's'
  },{
    name: 'Non-technical Co-Founder',
    logic: 'nonTech',
    description: 'gains 1h/a for every rare, epic or legendary technical allied unit',
    rarity: 1,
    hitPoints: 4,
    attackPoints: 4,
    cost: 5,
    portait: 'a',
    category: 's'
  }


]

module.exports = {
  spells:spells,
  minions:minions
}
