export default function () {
  const { props, loopArgs } = this.ctx;
  props.onChange(props.value.filter(o => o !== loopArgs[0].item));
};
