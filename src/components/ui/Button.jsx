import { cn } from '../../utils/cn';

const variants = {
  primary: 'rounded-full bg-blue-950 px-4 py-2 text-white hover:bg-blue-800',
  secondary: 'rounded-full border border-neutral-300 bg-white px-4 py-2 text-neutral-900 hover:bg-neutral-100',
  ghost: 'rounded-full px-2 py-1 text-neutral-600 hover:text-neutral-950',
  icon: 'h-11 w-11 justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-950 shadow-md backdrop-blur hover:bg-neutral-100',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900/40',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
