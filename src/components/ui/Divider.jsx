import { cn } from '../../utils/cn';

export default function Divider({ className = '' }) {
  return <hr className={cn('border-white/10', className)} />;
}
