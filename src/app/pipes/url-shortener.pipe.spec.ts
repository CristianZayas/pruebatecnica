import { UrlShortenerPipe } from './url-shortener.pipe';

describe('UrlShortenerPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlShortenerPipe();
    expect(pipe).toBeTruthy();
  });
});
