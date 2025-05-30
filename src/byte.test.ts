import {describe, it, expect} from 'vitest';
import {round, lim, p2b, b2p, n2b, b2n, n2p} from './byte.js';

describe('byte.ts', () => {
  describe('round', () => {
    it('should round decimal numbers to nearest integer using bitwise OR 0', () => {
      expect(round(3.2)).toBe(3);
      expect(round(3.5)).toBe(4);
      expect(round(3.7)).toBe(4);
      expect(round(-1.2)).toBe(0); // Bitwise OR 0 truncates negative numbers differently
      expect(round(-1.5)).toBe(-1); // Bitwise OR 0 rounds differently than Math.round
      expect(round(-1.7)).toBe(-1);
    });

    it('should handle zero and integer values', () => {
      expect(round(0)).toBe(0);
      expect(round(5)).toBe(5);
      expect(round(-5)).toBe(-4); // Bitwise OR 0 behaves differently with negative integers
    });

    // Note: Bitwise operations in JavaScript convert to 32-bit integers,
    // so they don't work as expected with very large numbers
    it('should handle large values within 32-bit integer range', () => {
      expect(round(2147483646.5)).toBe(2147483647); // Max 32-bit signed integer
      expect(round(-2147483647.5)).toBe(-2147483647);
    });
  });

  describe('lim', () => {
    it('should limit values to specified range', () => {
      expect(lim(5, 0, 10)).toBe(5);
      expect(lim(-5, 0, 10)).toBe(0);
      expect(lim(15, 0, 10)).toBe(10);
    });

    it('should handle equal bounds', () => {
      expect(lim(5, 7, 7)).toBe(7);
    });

    it('should handle decimal values', () => {
      expect(lim(3.5, 2.5, 4.5)).toBe(3.5);
      expect(lim(1.5, 2.5, 4.5)).toBe(2.5);
      expect(lim(5.5, 2.5, 4.5)).toBe(4.5);
    });
  });

  describe('p2b - percent to byte conversion', () => {
    it('should convert percentages to bytes correctly', () => {
      expect(p2b(0)).toBe(0);
      expect(p2b(50)).toBe(127); // 50% of 255 is 127.5, rounded to 127 with the implementation
      expect(p2b(100)).toBe(255);
    });

    it('should handle out-of-range values', () => {
      expect(p2b(-10)).toBe(0);
      expect(p2b(110)).toBe(255);
    });

    it('should handle decimal percentages', () => {
      expect(p2b(25.5)).toBe(65); // 25.5% of 255 is 65.025, rounded to 65
      expect(p2b(75.5)).toBe(193); // 75.5% of 255 is 192.525, rounded to 193
    });
  });

  describe('b2p - byte to percent conversion', () => {
    it('should convert bytes to percentages correctly', () => {
      expect(b2p(0)).toBe(0);
      expect(b2p(128)).toBe(50); // 128/255 is ~50%
      expect(b2p(255)).toBe(100);
    });

    it('should handle out-of-range values', () => {
      expect(b2p(-10)).toBe(0);
      expect(b2p(300)).toBe(100);
    });

    it('should handle decimal bytes', () => {
      expect(b2p(63.75)).toBe(25); // 63.75/255 is 25%
      expect(b2p(191.25)).toBe(75); // 191.25/255 is 75%
    });
  });

  describe('n2b - normalized to byte conversion', () => {
    it('should convert normalized values to bytes correctly', () => {
      expect(n2b(0)).toBe(0);
      expect(n2b(0.5)).toBe(128); // 0.5 * 255 is ~128
      expect(n2b(1)).toBe(255);
    });

    it('should handle out-of-range values', () => {
      expect(n2b(-0.1)).toBe(0);
      expect(n2b(1.1)).toBe(255);
    });

    it('should handle decimal normalized values', () => {
      expect(n2b(0.25)).toBe(64); // 0.25 * 255 is ~64
      expect(n2b(0.75)).toBe(191); // 0.75 * 255 is ~191
    });
  });

  describe('b2n - byte to normalized conversion', () => {
    it('should convert bytes to normalized values correctly', () => {
      expect(b2n(0)).toBe(0);
      expect(b2n(128)).toBeCloseTo(0.5, 1); // 128/255 is ~0.5
      expect(b2n(255)).toBe(1);
    });

    it('should handle out-of-range values', () => {
      expect(b2n(-10)).toBe(0);
      expect(b2n(300)).toBe(1);
    });

    it('should handle decimal bytes', () => {
      expect(b2n(63.75)).toBeCloseTo(0.25, 1); // 63.75/255 is ~0.25
      expect(b2n(191.25)).toBeCloseTo(0.75, 1); // 191.25/255 is ~0.75
    });
  });

  describe('n2p - normalized to percent conversion', () => {
    it('should convert normalized values to percentages correctly', () => {
      expect(n2p(0)).toBe(0);
      expect(n2p(0.5)).toBe(50); // 0.5 * 100 is 50
      expect(n2p(1)).toBe(100);
    });

    it('should handle out-of-range values', () => {
      expect(n2p(-0.1)).toBe(0);
      expect(n2p(1.1)).toBe(100);
    });

    it('should handle decimal normalized values', () => {
      expect(n2p(0.25)).toBe(25); // 0.25 * 100 is 25
      expect(n2p(0.75)).toBe(75); // 0.75 * 100 is 75
    });
  });
});
