import { describe, beforeEach, it, expect } from 'vitest';
import Character from './Character';
import Attribute from './Attributes';
import Rating from './Rating';

describe('Character Class', () => {
  let character;

  beforeEach(() => {
    character = new Character();
  });

  it('should initialize with correct attributes', () => {
    expect(character.attributes.strength).toBeInstanceOf(Attribute);
    expect(character.attributes.strength.name).toBe("Strength");
    expect(character.attributes.strength.value).toBeInstanceOf(Rating);
    expect(character.attributes.strength.value.label).toBe("C");

    expect(character.attributes.agility).toBeInstanceOf(Attribute);
    expect(character.attributes.agility.name).toBe("Agility");
    expect(character.attributes.agility.value).toBeInstanceOf(Rating);
    expect(character.attributes.agility.value.label).toBe("C");

    expect(character.attributes.intelligence).toBeInstanceOf(Attribute);
    expect(character.attributes.intelligence.name).toBe("Intelligence");
    expect(character.attributes.intelligence.value).toBeInstanceOf(Rating);
    expect(character.attributes.intelligence.value.label).toBe("C");

    expect(character.attributes.empathy).toBeInstanceOf(Attribute);
    expect(character.attributes.empathy.name).toBe("Empathy");
    expect(character.attributes.empathy.value).toBeInstanceOf(Rating);
    expect(character.attributes.empathy.value.label).toBe("C");
  });

  it('should initialize with empty specialties array', () => {
    expect(character.specialties).toEqual([]);
  });

  it('should initialize with hitCapacity of 0', () => {
    expect(character.hitCapacity).toBe(0);
  });

  it('should initialize with stressCapacity of 0', () => {
    expect(character.stressCapacity).toBe(0);
  });

  it('should initialize with cuf rating of "D"', () => {
    expect(character.cuf).toBeInstanceOf(Rating);
    expect(character.cuf.label).toBe("D");
  });

  it('should initialize with radiation of 0', () => {
    expect(character.radiation).toBe(0);
  });

  it('should initialize with empty gear array', () => {
    expect(character.gear).toEqual([]);
  });
});