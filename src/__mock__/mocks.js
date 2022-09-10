const movieApi = () => Promise.resolve([
  {
    title: 'Under the Doom',
    weight: 60,
    summary: 'lorem ipsum dolor sit',
  },
  {
    title: 'Inside the Doom',
    weight: 50,
    summary: 'lorem ipsum dolor sit',
  },
  {
    title: 'swallowed by the Doom',
    weight: 100,
    summary: 'lorem ipsum dolor sit',
  },
]);

const getComments = () => Promise.resolve([
  {
    id: 1,
    name: 'William',
    comment: 'lorem ipsum dolor sit',
  },
  {
    id: 2,
    name: 'Jonah',
    comment: 'lorem ipsum dolor sit',
  },
  {
    id: 3,
    name: 'Kidde',
    comment: 'lorem ipsum dolor sit',
  },
]);
export { movieApi, getComments };