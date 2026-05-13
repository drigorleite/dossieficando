import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/fadeAnimations';
import TimelineItem from './TimelineItem';

export default function Timeline({ items }) {
  if (!items?.length) return null;

  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {items.map((item, index) => (
        <TimelineItem key={`${item.year}-${index}`} item={item} />
      ))}
    </motion.div>
  );
}
