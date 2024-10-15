function makaCategoriesService() {
  const baseUrl = "/category";
  const headers = {
    "Content-Type": "application/json",
  };

  async function getCategories() {
    let url = `${baseUrl}`;
    return await fetch(url).then((res) => res.json());
  }
  async function getCategoryById(id) {
    let url = `${baseUrl}/${id}`;
    return await fetch(url).then((res) => res.json());
  }
  return { getCategories, getCategoryById };
}

export default makaCategoriesService();
