export function formatDate(dateString) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
}

export function formatYear(dateString) {
  if (!dateString) return '';
  return new Date(dateString).getFullYear().toString();
}
