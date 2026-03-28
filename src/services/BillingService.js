import { billingSummary, paymentHistory } from '../data/MockBilling'
import { currentPlanId, plans } from '../data/Plans'

export const getBillingData = async () => ({
  plans,
  currentPlanId,
  paymentHistory,
  billingSummary,
})
