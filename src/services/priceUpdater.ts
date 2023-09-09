import axios from "axios";

const BASE_URL = "http://localhost:5000";

export async function postCsvFile(body: FormData) {
  const promise = await axios.post(`${BASE_URL}/api/uploads/validation`, body);
  return promise;
}

export async function putProductsPrice(body: FormData) {
  const promise = await axios.put(`${BASE_URL}/api/uploads/update`, body);
  return promise;
}
