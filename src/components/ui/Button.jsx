import { cn } from '../../utils/cn';

const variants = {
  primary: 'rounded-full bg-white px-4 py-2 text-black hover:bg-neutral-200',
  secondary: 'rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10',
  ghost: 'rounded-full px-2 py-1 text-neutral-400 hover:text-white',
  icon: 'h-11 w-11 justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur text-white hover:bg-white hover:text-black',
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
        'inline-flex items-center gap-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
