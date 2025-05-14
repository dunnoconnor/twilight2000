import { describe, it, expect } from 'vitest';
import roll from '../src/roll';

describe('roll', () => {
    // Test normal cases
    it('should return an array of the correct length with valid inputs', () => {
        // Arrange
        const count = 5;
        const size = 6;

        // Act
        const result = roll(count, size);

        // Assert
        expect(result).toHaveLength(count);
        result.forEach(value => {
            expect(value).toBeGreaterThanOrEqual(1);
            expect(value).toBeLessThanOrEqual(size);
        });
    });

    it('should handle rolling a single die', () => {
        // Arrange
        const count = 1;
        const size = 20;

        // Act
        const result = roll(count, size);

        // Assert
        expect(result).toHaveLength(1);
        expect(result[0]).toBeGreaterThanOrEqual(1);
        expect(result[0]).toBeLessThanOrEqual(size);
    });

    // Test edge cases
    it('should return an empty array when count is 0', () => {
        // Arrange
        const count = 0;
        const size = 6;

        // Act
        const result = roll(count, size);

        // Assert
        expect(result).toEqual([]);
    });

    it('should handle the smallest die size of 1', () => {
        // Arrange
        const count = 3;
        const size = 1;

        // Act
        const result = roll(count, size);

        // Assert
        expect(result).toHaveLength(count);
        result.forEach(value => {
            expect(value).toBe(1); // Only possible value for a 1-sided die
        });
    });

    // Test error cases
    it('should throw an error when count is negative', () => {
        // Arrange
        const count = -1;
        const size = 6;

        // Act & Assert
        expect(() => roll(count, size)).toThrowError('Invalid count or size');
    });

    it('should throw an error when size is less than 1', () => {
        // Arrange
        const count = 3;
        const size = 0;

        // Act & Assert
        expect(() => roll(count, size)).toThrowError('Invalid count or size');
    });

    it('should throw an error when count or size is not a number', () => {
        // Arrange
        const invalidInputs = [
            { count: '3', size: 6 },
            { count: 3, size: '6' },
            { count: null, size: 6 },
            { count: 3, size: undefined },
        ];

        // Act & Assert
        invalidInputs.forEach(({ count, size }) => {
            expect(() => roll(count, size)).toThrowError('Invalid count or size');
        });
    });

    // Test business logic validations
    it('should produce random results for multiple calls', () => {
        // Arrange
        const count = 5;
        const size = 6;

        // Act
        const result1 = roll(count, size);
        const result2 = roll(count, size);

        // Assert
        expect(result1).not.toEqual(result2); // Highly unlikely to be the same
    });
});
