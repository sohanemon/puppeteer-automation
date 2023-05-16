'use client';
import * as Label from '@radix-ui/react-label';

export default function InputSe() {
  return (
    <>
      <div className='space-y-2 px-5 @container w-1/2 mx-auto'>
        <div>
          <Label.Root
            className='text-[15px] font-medium leading-[35px] whitespace-nowrap text-white'
            htmlFor='toScrape'
          >
            Website URL
          </Label.Root>
          <input
            className='inline-flex w-full px-4 py-2 rounded-md bg-neutral-700'
            type='text'
            id='toScrape'
            defaultValue='https://github.com/sohanemon'
          />
        </div>
        <button className='px-4 py-2 ml-auto tracking-wide rounded-md bg-neutral-800 '>
          Scrap
        </button>
      </div>
    </>
  );
}
