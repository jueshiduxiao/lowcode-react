export default function (e) {
  const { state, setState } = this.ctx;
  setState("cnt", parseInt(e.target.value, 10));
};
