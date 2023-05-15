import { NextResponse } from 'next/server';
import { Browser } from 'puppeteer';

export async function GET(req: Request) {
  const url = 'https://books.toscrape.com';
  const b = new Browser();
  const page = await b.newPage();
  await page.goto(url);

  const book = await page.evaluate(() => {
    const classes = document.getElementsByClassName('image_container');
    console.log(classes);
  });

  await b.close();
  return NextResponse.json('Welcome in web scraping');
}
