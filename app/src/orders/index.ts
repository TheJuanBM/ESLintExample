import getOrdersAsync from './getOrders'

export default async function startAppAsync() {
  return await getOrdersAsync()
}
