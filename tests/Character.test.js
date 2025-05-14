import { describe, it, expect } from 'vitest';
import Character from '../src/Character';
import Rating from '../src/Rating';

describe('Character', () => {
    // Test normal cases
    it('should initialize with default values', () => {
        // Arrange & Act
        const character = new Character();

        // Assert
        expect(character.specialties).toEqual([]);
        expect(character.hitCapacity).toBe(0);
        expect(character.stressCapacity).toBe(0);
        expect(character.radiation).toBe(0);
        expect(character.gear).toEqual([]);
        expect(character.cuf).toBeInstanceOf(Rating);
        expect(character.cuf.value).toBe(6);
    });

    it('should allow setting and getting properties', () => {
        // Arrange
        const character = new Character();
        const testSpecialties = ['Combat', 'Survival'];
        const testGear = ['Rifle', 'Medkit'];

        // Act
        character.specialties = testSpecialties;
        character.hitCapacity = 10;
        character.stressCapacity = 5;
        character.radiation = 2;
        character.gear = testGear;

        // Assert
        expect(character.specialties).toEqual(testSpecialties);
        expect(character.hitCapacity).toBe(10);
        expect(character.stressCapacity).toBe(5);
        expect(character.radiation).toBe(2);
        expect(character.gear).toEqual(testGear);
    });

    // Test edge cases
    it('should handle empty arrays for specialties and gear', () => {
        // Arrange
        const character = new Character();

        // Act
        character.specialties = [];
        character.gear = [];

        // Assert
        expect(character.specialties).toEqual([]);
        expect(character.gear).toEqual([]);
    });

    it('should handle zero values for numeric properties', () => {
        // Arrange
        const character = new Character();

        // Act
        character.hitCapacity = 0;
        character.stressCapacity = 0;
        character.radiation = 0;

        // Assert
        expect(character.hitCapacity).toBe(0);
        expect(character.stressCapacity).toBe(0);
        expect(character.radiation).toBe(0);
    });

    // Test error cases
    it('should throw error when setting negative hit capacity', () => {
        // Arrange
        const character = new Character();

        // Act & Assert
        expect(() => {
            character.hitCapacity = -1;
        }).toThrow();
    });

    it('should throw error when setting negative stress capacity', () => {
        // Arrange
        const character = new Character();

        // Act & Assert
        expect(() => {
            character.stressCapacity = -1;
        }).toThrow();
    });

    it('should throw error when setting negative radiation', () => {
        // Arrange
        const character = new Character();

        // Act & Assert
        expect(() => {
            character.radiation = -1;
        }).toThrow();
    });

    // Test business logic validations
    it('should maintain CUF rating as a Rating instance', () => {
        // Arrange
        const character = new Character();

        // Act & Assert
        expect(character.cuf).toBeInstanceOf(Rating);
        expect(character.cuf.name).toBe('CUF');
        expect(character.cuf.value).toBe(6);
    });

    it('should allow adding and removing gear', () => {
        // Arrange
        const character = new Character();
        const testGear = ['Rifle', 'Medkit'];

        // Act
        character.gear = testGear;
        character.gear.push('Ammo');
        character.gear = character.gear.filter(item => item !== 'Medkit');

        // Assert
        expect(character.gear).toEqual(['Rifle', 'Ammo']);
    });

    it('should allow adding and removing specialties', () => {
        // Arrange
        const character = new Character();
        const testSpecialties = ['Combat', 'Survival'];

        // Act
        character.specialties = testSpecialties;
        character.specialties.push('Navigation');
        character.specialties = character.specialties.filter(spec => spec !== 'Survival');

        // Assert
        expect(character.specialties).toEqual(['Combat', 'Navigation']);
    });
}); 