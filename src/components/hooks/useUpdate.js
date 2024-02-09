export async function getUdateOrder(id) {
  const result = await fetch(`http://localhost:5000/order/${id}`, {
    cache: "no-store",
  });
  return result.json();
}
