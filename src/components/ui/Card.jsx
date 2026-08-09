import { cn } from '../../utils/cn';

export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
