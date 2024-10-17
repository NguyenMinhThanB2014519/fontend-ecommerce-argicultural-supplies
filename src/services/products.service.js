function makeProductsServices() {
  const baseUrl = "/products";
  const headers = {
    "Content-Type": "application/json",
  };
  async function getAllProducts() {
    let url = `${baseUrl}`;
    try {
      return await fetch(url, { headers }).then((res) => res.json());
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  }

  async function getProductNameByCategoryID(id) {
    let url = `${baseUrl}/${id}`;
    try {
      return await fetch(url, { headers }).then((res) => res.json());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return {
    getAllProducts,
    getProductNameByCategoryID,
  };
}
export default makeProductsServices();
