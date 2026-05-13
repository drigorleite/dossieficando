import { cn } from '../../utils/cn';

export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn(
        'rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
