import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: Request) {
  const url = 'https://books.toscrape.com';
  const b = await puppeteer.launch({ headless: true });
  const page = await b.newPage();
  await page.goto(url);

  const book = await page.evaluate(() => {
    console.log('first');
    const books = Array.from(
      document.querySelectorAll(
        '#default > div.container-fluid.page > div > div > div > section > div > ol > li'
      )
    );
    const final = books.map((el) => ({
      name: el?.querySelector('h3 > a')?.innerHTML,
    }));
    return final;
  });
  //   console.log(book);
  await b.close();

  return NextResponse.json('lol');
}
