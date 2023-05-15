import { NextResponse } from 'next/server';
import { Browser } from 'puppeteer';

export async function GET(req: Request) {
  const url = 'https://books.toscrape.com';
  const b = new Browser();
  const page = b.newPage();
  (await page).goto(url);

  b.close();
  return NextResponse.json('Welcome in web scraping');
}
