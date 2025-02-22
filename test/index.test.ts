import { classNames } from '../src';

describe('classNames', () => {
  it('should join class names', () => {
    expect(classNames('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should filter out falsy values', () => {
    expect(classNames('foo', null, undefined, 'bar', false, 'baz')).toBe('foo bar baz');
  });

  it('should handle empty input', () => {
    expect(classNames()).toBe('');
  });
});