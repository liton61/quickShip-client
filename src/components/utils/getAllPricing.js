export const getAllPrice = async () => {
  const res = await fetch("http://localhost:5000/price-box");

  return res.json();
};
export const getPrice = async (id) => {
  const res = await fetch(`http://localhost:5000/price-data/${id}`);

  return res.json();
};
