import { average } from '../src';

describe('Average integration test', () => {
  it('should get 0 when pass nothing', () => {
    const res = average();
    expect(res).toBe(0);
  });

  it('should get an average of the 6, 3, 9, and 0', () => {
    const res = average(6, 3, 9, 0);
    expect(res).toBe(4.5);
  });
});
