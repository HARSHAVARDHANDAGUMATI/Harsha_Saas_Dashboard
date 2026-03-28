import { analyticsByRange, dashboardOverview } from '../data/MockAnalytics'

export const getDashboardOverview = async () => dashboardOverview
export const getAnalyticsByRange = async (range) => analyticsByRange[range]
