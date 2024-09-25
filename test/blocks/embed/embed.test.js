import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';

document.body.innerHTML = await readFile({ path: './mocks/body.html' });

describe('Media and link block', () => {

  it('Displays a picture element with correct sources', async () => {
    const picture = document.querySelector('picture');
    const sources = picture.querySelectorAll('source');
    const img = picture.querySelector('img');

    expect(sources.length).to.equal(3);
    expect(sources[0].getAttribute('type')).to.equal('image/webp');
    expect(sources[1].getAttribute('type')).to.equal('image/webp');
    expect(sources[2].getAttribute('type')).to.equal('image/png');
    expect(img.getAttribute('src')).to.include('media_13cb4883764c57f38d6fe7074e9b52647f3d76b92.png?width=750&format=png&optimize=medium');
    expect(img.getAttribute('loading')).to.equal('lazy');
  });

  it('Contains a valid YouTube link', async () => {
    const link = document.querySelector('a');
    expect(link.getAttribute('href')).to.equal('https://www.youtube.com/watch?v=kPa7bsKwL-c');
    expect(link.textContent).to.equal('https://www.youtube.com/watch?v=kPa7bsKwL-c');
  });
});
