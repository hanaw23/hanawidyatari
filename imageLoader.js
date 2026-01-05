export default function netlifyImageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
