'use client';
import * as Label from '@radix-ui/react-label';

export default function InputSe() {
  return (
    <>
      <div className='flex flex-wrap items-center gap-[15px] px-5 @container w-full mx-auto'>
        <Label.Root
          className='text-[15px] font-medium leading-[35px] text-white'
          htmlFor='firstName'
        >
          First name
        </Label.Root>
        <input
          className=' inline-flex h-[35px] w-[200px] bg-white'
          type='text'
          id='firstName'
          defaultValue='Pedro Duarte'
        />
      </div>
    </>
  );
}
