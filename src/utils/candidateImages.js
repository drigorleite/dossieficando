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

const aliases = {
  lula: ['luiz-inacio-lula', 'lula-da-silva', 'presidente-lula'],
  'renan-santos': ['renan', 'renan-mbl', 'renan-do-mbl'],
};

const imageEntries = Object.entries(candidateImageModules).map(([path, src]) => {
  const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';

  return {
    path,
    src,
    key: normalize(fileName),
  };
});

function findImageByKey(searchKey) {
  if (!searchKey) return null;

  const exact = imageEntries.find((image) => image.key === searchKey);
  if (exact) return exact.src;

  const partial = imageEntries.find(
    (image) => image.key.includes(searchKey) || searchKey.includes(image.key)
  );

  if (partial) return partial.src;

  return null;
}

export function getCandidateImage(candidate) {
  const slugKey = normalize(candidate?.slug);
  const nameKey = normalize(candidate?.name);

  const possibleKeys = [
    slugKey,
    nameKey,
    ...(aliases[slugKey] ?? []),
  ].filter(Boolean);

  for (const key of possibleKeys) {
    const image = findImageByKey(normalize(key));

    if (image) {
      return image;
    }
  }

  return candidate?.image;
}
