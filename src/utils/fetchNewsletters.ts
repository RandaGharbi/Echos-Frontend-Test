import { NEWSLETTER_ITEMS } from '../mocks/newsletters'

export const fetchNewsletters = async (): Promise<typeof NEWSLETTER_ITEMS> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(NEWSLETTER_ITEMS)
    }, 1000) // This simulates a delay, remove in production
  })
}
