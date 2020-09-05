module.exports = (filters) => {
  const categoryFilter = filters.find((filter) => filter.id == 'category');
  if (!categoryFilter) return [];
  const categories = categoryFilter.values[0].path_from_root.map(
    (category) => category.name
  );

  return categories;
};
