export const parseTime = (timestamp: number) => {
  let h = new Date(timestamp).getHours();
  let m = new Date(timestamp).getMinutes();

  return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
};
