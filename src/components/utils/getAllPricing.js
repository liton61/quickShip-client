export const getAllPrice = async () => {
  const res = await fetch("https://quick-ship-server.vercel.app/price-box");

  return res.json();
};
export const getPrice = async (id) => {
  const res = await fetch(`https://quick-ship-server.vercel.app/price-data/${id}`);

  return res.json();
};
