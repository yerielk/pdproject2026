export function isDateReached(dateString) {
  return new Date() >= new Date(dateString);
}

export function formatKoreanDateTime(dateString) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}