const candidateImageModules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

function normalize(value = '') {
  return value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const candidateImagesByKey = Object.entries(candidateImageModules).reduce((images, [path, src]) => {
  const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
  const key = normalize(fileName);

  if (key) {
    images[key] = src;
  }

  return images;
}, {});

export function getCandidateImage(candidate) {
  const slugKey = normalize(candidate?.slug);
  const nameKey = normalize(candidate?.name);

  return candidateImagesByKey[slugKey] ?? candidateImagesByKey[nameKey] ?? candidate?.image;
}
