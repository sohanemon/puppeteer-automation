import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: Request) {
  const url = 'https://books.toscrape.com';
  const b = await puppeteer.launch({ headless: true });
  const page = await b.newPage();
  await page.goto(url);

  const book = await page.evaluate(() => {
    return document.querySelectorAll(
      '#default > div.container-fluid.page > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1)'
    );
  });
  console.log(book);

  await b.close();
  return NextResponse.json('Welcome in web scraping');
}
