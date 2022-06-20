export default function () {
  const { state, setState } = this.ctx;
  setState("cnt", state.cnt + 1);
};
