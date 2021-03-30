import * as averageModule from '.';

describe('sum function', () => {
  it('should get summation of 1-10 numbers', () => {
    const res = averageModule.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(res).toBe(55);
  });
});

describe('average function', () => {
  beforeAll(() => {
    jest.spyOn(averageModule, 'sum').mockReturnValue(18);
  });

  it('should get 0 when pass nothing', () => {
    const res = averageModule.average();
    expect(res).toBe(0);
  });

  it('should get an average of the 6, 3, 9, and 0', () => {
    const res = averageModule.average(6, 3, 9, 0);
    expect(res).toBe(4.5);
  });
});
