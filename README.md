This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# Puppeteer Automation

### No `console.log`

`puppeteer` doesn't show log for inside the `evaluate` function

### Converting `nodeList` in `array`

`querySelector` returns a `nodeList` which not so **easy** to iterate.
To get all the `array` features we can use as below:

```ts
const book = await page.evaluate(() =>
     Array.from(
      document.querySelectorAll(
        '#default > div.container-fluid.page > div > div > div > section > div > ol > li'
      )
    );
);

```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
