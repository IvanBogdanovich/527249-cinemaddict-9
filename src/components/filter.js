export const getFilterCount = (movies) => {

  return [
    {
      title: `watchlist`,
      count: movies.length
    },
    {
      title: `history`,
      count: 0
    },
    {
      title: `favorites`,
      count: 0
    },
  ];
};
