import cheerio from 'cheerio';


const fetchHtml = (url) => {
  return fetch(url).then(res => res.text());
}


const saveRecipe = async (url) => {
  const html = await fetchHtml(url)
  const $ = cheerio.load(html);
  const jsonld = $('script[type="application/ld+json"]').html();
  const parsed = JSON.parse(jsonld);

  return parsed;
}


export default { saveRecipe }