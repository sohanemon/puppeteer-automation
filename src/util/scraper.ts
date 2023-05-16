export async function scraper(url: string) {
  const res = await fetch('/puppeteer');
  const data = await res.json();
  console.log('🛑 ~ scraper ~ data:', data);
}
