import cn from 'classnames';

interface TagProps extends React.PropsWithChildren {
  bg?: 'light' | 'medium' | 'dark';
}

const Tag = ({ children, bg }: TagProps) => (
  <div
    className={cn('rounded-xl px-4 py-2 mr-2 mb-4 font-robotomono hover:animate-bounce', {
      'bg-blue-950': bg === 'dark',
      'bg-blue-800': bg === 'medium',
      'bg-blue-600': bg === 'light' || !bg,
    })}
  >
    {children}
  </div>
);

const TagList = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-wrap justify-center">{children}</div>
);

export { Tag, TagList };
