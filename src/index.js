import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/beige.css';
import 'reveal.js/plugin/highlight/zenburn.css';

const slide = new Reveal({
  hash: true,
  plugins: [Markdown, Highlight],
});

slide.initialize();
