export async function getUdateOrder(id) {
  const result = await fetch(`https://quickship-04.vercel.app/order/${id}`, {
    cache: "no-store",
  });
  return result;
}
