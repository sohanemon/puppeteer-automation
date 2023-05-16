'use client';
import React, { forwardRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function NavigationMenuDemo() {
  return (
    <>
      <NavigationMenu.Root className='relative z-[1] flex w-screen justify-center text-neutral-200'>
        <NavigationMenu.List className='center  m-0 flex list-none rounded-[6px]  p-1 0_2px_10px]'>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none '>
              Learn{' '}
              <CaretDownIcon
                className='relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='bg-neutral-700 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto'>
              <ul className='one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]'>
                <li className='grid row-span-3'>
                  <NavigationMenu.Link asChild>
                    <a
                      className='flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-neutral-700 p-[25px] no-underline outline-none '
                      href='/'
                    >
                      <svg
                        aria-hidden
                        width='38'
                        height='38'
                        viewBox='0 0 25 25'
                        fill='white'
                      >
                        <path d='M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z'></path>
                        <path d='M12 0H4V8H12V0Z'></path>
                        <path d='M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z'></path>
                      </svg>
                      <div className='mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white'>
                        Radix Primitives
                      </div>
                      <p className=' text-[14px] leading-[1.3]'>
                        Unstyled, accessible components for React.
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <ListItem href='https://stitches.dev/' title='Stitches'>
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href='/colors' title='Colors'>
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href='https://icons.radix-ui.com/' title='Icons'>
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className=' block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none '
              href='https://github.com/sohanemon'
            >
              Github
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className='data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]'>
            <div className='relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-neutral-700' />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className='perspective-[2000px] absolute top-full left-0 flex w-full justify-center'>
          <NavigationMenu.Viewport className='data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]' />
        </div>
      </NavigationMenu.Root>
    </>
  );
}
interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: any;
}

const ListItem = forwardRef<any, Props>(
  ({ className, children, title, href }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            '  hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
            className
          )}
          ref={forwardedRef}
          href={href}
        >
          <div className='mb-[5px] font-medium leading-[1.2]'>{title}</div>
          <p className='leading-[1.4]'>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = 'ListItem';
