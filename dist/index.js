import Reveal from '../_snowpack/pkg/revealjs.js';
import Markdown from '../_snowpack/pkg/revealjs/plugin/markdown/markdown.esm.js';
import Highlight from '../_snowpack/pkg/revealjs/plugin/highlight/highlight.esm.js';

import '../_snowpack/pkg/revealjs/dist/reveal.css.proxy.js';
import '../_snowpack/pkg/revealjs/dist/theme/beige.css.proxy.js';
import '../_snowpack/pkg/revealjs/plugin/highlight/zenburn.css.proxy.js';

const slide = new Reveal({
  hash: true,
  plugins: [Markdown, Highlight],
});

slide.initialize();
