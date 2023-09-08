import axios from "axios";

const BASE_URL = "http://localhost:5000";

export async function postCsvFile(body: any) {
  const promise = await axios.post(`${BASE_URL}/api/uploads/validation`, body);
  return promise;
}
