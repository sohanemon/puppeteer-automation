'use client';
import * as Label from '@radix-ui/react-label';

export default function InputSe() {
  return (
    <>
      <div className='flex items-center gap-[15px] px-5 @container w-1/2 mx-auto fixed inset-0'>
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
        <button className='px-4 py-2 tracking-wide rounded-md bg-neutral-800'>
          Scrap
        </button>
      </div>
    </>
  );
}
