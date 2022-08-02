import { Injectable, Output} from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from '../character/character.model';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  //character: Character= {}
  //Array and subject for race
  races: string[]= [
    'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Human',
    'Mutant', 'Mutant', 'Mutant', 'Mutant', 'Mutant',
    'Cyborg', 'Cyborg', 'Cyborg', 'Cyborg', 'Cyborg',
    'Alien', 'Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Halfling', 'Half-Giant', 'Orc', 'Thri-Kreen', 'Tiefling',]
  race = new Subject

  colors: string[]= [
    'Black', 'Blue', 'Bone', 'Brown', 'Dolm', 'Green', 'Jale',
    'Orange', 'Purple', 'Red', 'Ulfire', 'White', 'Yellow']
  color = new Subject

  classes: string[]= [
    'Barbarian', 'Crusader', 'Fighter', 'Monk',
    'Adventurer', 'Assassin', 'Ranger',
    'Cleric', 'Druid', 'Summoner', 'Warlock', 'Wild Mage', 'Wizard',
    'Psychic', 'Engineer']
  class = new Subject

  smarts: string[]= [
    'Psychic', 'Engineer']
  smart = new Subject

  smashes: string[]= [
    'Barbarian', 'Crusader', 'Fighter', 'Monk',]
  smash = new Subject

  sneaks: string[]= [
    'Adventurer', 'Assassin', 'Ranger',]
  sneak = new Subject

  spells: string[]= [
    'Cleric', 'Druid', 'Summoner', 'Warlock', 'Wild Mage', 'Wizard',]
  spell = new Subject

  armormats: string[]= [
    'Wooden', 'Chitin', 'Horn/Bone', 'Hide', 'Scale', 'Ceramic', 'Crystal', 'Metal']
  armormat = new Subject

  armors: string[]= [
    'Light Armor(AC12, MV9)', 'Medium Armor(AC14, MV6)', 'Heavy Armor(AC16, MV3)',]
  armor = new Subject

  gps: string[]= [
    '5GP', '6GP', '7GP', '8GP', '9GP', '10GP', '11GP', '12GP',
    '13GP', '14GP', '15GP', '16GP', '17GP', '18GP', '19GP', '20GP']
  gp = new Subject

  weapons: string[]= [
    'Axe', 'Club', 'Hammer', 'Mace', 'Scythe', 'Spear', 'Sword', 'Trident']
  weapon = new Subject

  weapmats: string[]= [
    'Wooden', 'Chitin', 'Horn/Bone', 'Stone', 'Obsidian', 'Ceramic', 'Crystal', 'Metal']
  weapmat = new Subject

  hands: string[]= [
    'One-Handed(1D)', 'One/Two-Handed(1D/2D, -1MV)', 'Two-Handed(2D, -1MV)']
  hand = new Subject

  shields: string[]= [
    'No Shield', 'Small Shield', 'Large Shield']
  shield = new Subject

  shieldmats: string[]= [
    'Wooden', 'Chitin', 'Horn/Bone', 'Hide', 'Scale', 'Ceramic', 'Crystal', 'Metal']
  shieldmat = new Subject

  ranged: string[]= [
    'No Ranged', 'Sling(1D, Short Range)', 'Bow(2D, 20 Arrows)',]
  range = new Subject

  clerics: string[]= [
    'Animate Dead', 'Blindness', 'Command', 'Create Sustenance', 'Cure Disease', 'Cure Poison', 'Cure Wounds',
    'Darkness', 'Dispel Magic', 'Flame Strike', 'Light', 'Prayer', 'Regeneration', 'Remove Curse', 'Remove Fear',
    'Restoration', 'Revive', 'Sanctuary', 'Tongues', 'Resurrect', 'Essential Salts', 'Remove Mutation'  ]
  cleric = new Subject

  druids: string[]= [
    'Animal Friendship', 'Animal Summoning', 'Barkskin', 'Call Lightning', 'Commune w/ Nature', 'Control Winds',
    'Cure Wounds', 'Darkness', 'Entangle', 'Feather Fall', 'Pass w/o Trace', 'Plant Door', 'Plant Growth',
    'Speak w/ Animals', 'Stone Shape', 'Transmute Rock to Mud', 'Tree Shape', 'Wall of Thorns', 'Warp Wood',
    'Water Breathing', 'Cure Poison', 'Delay Poison', 'Detect Poison', 'Reincarnate'  ]
  druid = new Subject

  wizards: string[]= [
    'Charm', 'Darkness', 'Detect Magic', 'Dispel Magic', 'Enlarge', 'Feather Fall', 'Fireball',
    'Floating Disk', 'Identify', 'Knock', 'Light', 'Lightning Bolt', 'Mage Armor', 'Sleep', 'Spider Climb',
    'Unseen Servant', 'Wall of Force', 'Web', 'Crushing Fist of Spite', 'Prismatic Spray']
  wizard = new Subject

  psionics: string[]= [
    'Disorient', 'Levitation', 'Mental Blast', 'Mind Control', 'Precognition',
    'Psychometry', 'Pyrokinesis', 'Remote Sensing', 'Telekinesis', 'Telepathy']
  psionic = new Subject

  gandcs: string[]= [
    'Demonic', 'Midget', 'Goblin Blood', 'Giant Blood', 'Fairy Blood', 'Demigod',
    'Maniac', 'Greed', 'Melancholy', 'Amore', 'Loyalty', 'Love',
    'Deaf', 'Stupid', 'Sickly', 'Syphilis', 'Eagle-Eye', 'Acute Hearing',
    'Outlaw', 'Poor', 'Bastard', 'Rage!', 'Relic', 'Artifact',
    'Leprosy', 'Hideous', 'Peg-Leg', 'Rich', 'Heirloom', 'Filthy', 'Rich',
    'Craven', 'Coward', 'Fear (Subject)', 'Iron Will', 'Brave', 'Valorous',
    'Enemy', 'Debt of Honor', 'Side-Kick', 'Favor', 'Patron',
    'Kin Slayer', 'Blackguard', 'Cur', 'Vendetta', 'Likeable', 'Commanding Voice',
    'Liar', 'Drunkard', 'Cad', 'Ferocious', 'Lucky', 'Beautiful Voice', 'Mute', 'Schwachling',
    'Fool', 'Rugged', 'Comely', 'Fleet of Foot', 'Slave', ]
  gandc = new Subject

  constructor() { }

  getRandomRace() {
    const randomRace = this.races[Math.floor(Math.random()*this.races.length)]
    this.race.next(randomRace)
  }

  getRandomColor() {
    const randomColor = this.colors[Math.floor(Math.random()*this.colors.length)]
    this.color.next(randomColor)
  }

  getRandomClass() {
    const randomClass = this.classes[Math.floor(Math.random()*this.classes.length)]
    this.class.next(randomClass)
  }

  getRandomSmart() {
    const randomSmart = this.smarts[Math.floor(Math.random()*this.smarts.length)]
    this.smart.next(randomSmart)
  }

  getRandomSmash() {
    const randomSmash = this.smashes[Math.floor(Math.random()*this.smashes.length)]
    this.smash.next(randomSmash)
  }

  getRandomSneak() {
    const randomSneak = this.sneaks[Math.floor(Math.random()*this.sneaks.length)]
    this.sneak.next(randomSneak)
  }

  getRandomSpell() {
    const randomSpell = this.spells[Math.floor(Math.random()*this.spells.length)]
    this.spell.next(randomSpell)
  }

  getRandomArmor() {
    const randomArmor = this.armors[Math.floor(Math.random()*this.armors.length)]
    this.armor.next(randomArmor)
  }

  getRandomArmormat() {
    const randomArmormat = this.armormats[Math.floor(Math.random()*this.armormats.length)]
    this.armormat.next(randomArmormat)
  }

  getRandomGp() {
    const randomGp = this.gps[Math.floor(Math.random()*this.gps.length)]
    this.gp.next(randomGp)
  }

  getRandomWeapon() {
    const randomWeapon = this.weapons[Math.floor(Math.random()*this.weapons.length)]
    this.weapon.next(randomWeapon)
  }

  getRandomWeapmat() {
    const randomWeapmat = this.weapmats[Math.floor(Math.random()*this.weapmats.length)]
    this.weapmat.next(randomWeapmat)
  }

  getRandomHand() {
    const randomHand = this.hands[Math.floor(Math.random()*this.hands.length)]
    this.hand.next(randomHand)
  }

  getRandomRange() {
    const randomRange = this.ranged[Math.floor(Math.random()*this.ranged.length)]
    this.range.next(randomRange)
  }

  getRandomShield() {
    const randomShield = this.shields[Math.floor(Math.random()*this.shields.length)]
    this.shield.next(randomShield)
  }

  getRandomShieldmat() {
    const randomShieldmat = this.shieldmats[Math.floor(Math.random()*this.shieldmats.length)]
    this.shieldmat.next(randomShieldmat)
  }

  getRandomCleric() {
    const randomCleric = this.clerics[Math.floor(Math.random()*this.clerics.length)]
    this.cleric.next(randomCleric)
   }

  getRandomDruid() {
    const randomDruid = this.druids[Math.floor(Math.random()*this.druids.length)]
    this.druid.next(randomDruid)
  }

  getRandomWizard() {
    const randomWizard = this.wizards[Math.floor(Math.random()*this.wizards.length)]
    this.wizard.next(randomWizard)
  }

  getRandomPsionic() {
    const randomPsionic = this.psionics[Math.floor(Math.random()*this.psionics.length)]
    this.psionic.next(randomPsionic)
  }

  getRandomGandc() {
    const randomGandc = this.gandcs[Math.floor(Math.random()*this.gandcs.length)]
    this.gandc.next(randomGandc)
  }
}
