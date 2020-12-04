import reducer, {
  decrement,
  increment,
  incrementByAmount,
  initialState,
  selectCount,
} from './counterSlice';

describe('counter slice', () => {
  it('should properly increment the counter when calling increment with the current state', () => {
    // Action
    const nextState = reducer(initialState, increment());
    // Assertion
    const rootState = { counter: nextState };
    expect(selectCount(rootState)).toBe(1);
  });
  it('should properly decrement the counter when calling decrement with the current state', () => {
    // Action
    const nextState = reducer(initialState, decrement());
    // Assertion
    const rootState = { counter: nextState };
    expect(selectCount(rootState)).toBe(-1);
  });
  it('should properly incrementByAmount the counter when calling incrementByAmount with the current state', () => {
    // Action
    const nextState = reducer(initialState, incrementByAmount(10));
    // Assertion
    const rootState = { counter: nextState };
    expect(selectCount(rootState)).toBe(10);
  });
});
