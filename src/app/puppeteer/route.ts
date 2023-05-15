import { NextResponse } from 'next/server';
import { Browser } from 'puppeteer';

export async function GET(req: Request) {
  const url = 'https://books.toscrape.com';
  const b = new Browser();
  const page = await b.newPage();
  page.goto(url);

  await (
    await page
  ).evaluate(() => {
    const classes = document.getElementsByClassName('image_container');
    console.log(classes);
  });

  b.close();
  return NextResponse.json('Welcome in web scraping');
}
