export function formatTime(time) {
  const data = new Date(time + 'T12:00');
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}

export function formatDate(params) {
  const date = new Date(params);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}