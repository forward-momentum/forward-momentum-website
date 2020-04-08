export interface AnalyticsData {
  /**
   * Category of the event
   */
  category?: string
  /**
   * Human readable name
   */
  label?: string
  [key: string]: string | number | boolean
}