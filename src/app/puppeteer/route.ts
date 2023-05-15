import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: Request) {
  const url = 'https://books.toscrape.com';
  const b = await puppeteer.launch({ headless: true });
  const page = await b.newPage();
  await page.goto(url);

  const book = await page.evaluate(() => {
    return document.getElementsByClassName('image_container');
  });
  console.log(book);

  await b.close();
  return NextResponse.json('Welcome in web scraping');
}
