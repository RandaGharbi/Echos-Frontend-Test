import { fetchNewsletters } from '../utils/fetchNewsletters'
import { NEWSLETTER_ITEMS } from '../mocks/newsletters';

describe('fetchNewsletters', () => {
    it('should return the newsletter items', async () => {
        const result = await fetchNewsletters();
        expect(result).toEqual(NEWSLETTER_ITEMS);
    });
});
