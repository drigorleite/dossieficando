import { cn } from '../../utils/cn';

export default function Card({ children, className = '', as: Component = 'div', style, ...props }) {
  return (
    <Component
      className={cn(
        'rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6',
        className
      )}
      style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.05) inset', ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
