import cn from 'classnames';

interface TagProps extends React.PropsWithChildren {
  bg?: 'light' | 'medium' | 'dark';
}

interface TagListProps extends React.PropsWithChildren {
  className?: string;
}

const Tag = ({ children, bg }: TagProps) => (
  <div
    className={cn(
      'rounded-xl px-3 py-1 text-sm mr-2 mb-4 font-robotomono sm:px-4 sm:py-2 sm:text-base hover:animate-bounce',
      {
        'bg-blue-950': bg === 'dark',
        'bg-blue-800': bg === 'medium',
        'bg-blue-600': bg === 'light' || !bg,
      }
    )}
  >
    {children}
  </div>
);

const TagList = ({ children, className }: TagListProps) => (
  <div className={cn('flex flex-wrap justify-center', className)}>{children}</div>
);

export { Tag, TagList };
