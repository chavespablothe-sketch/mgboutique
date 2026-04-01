import { motion } from "framer-motion";
import type { ProgramSection } from "@/data/packages";

interface ProgramSectionsProps {
  sections: ProgramSection[];
}

const ProgramSections = ({ sections }: ProgramSectionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
        A experiência
      </h2>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.06 }}
            className="bg-card rounded-xl border border-border p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl" aria-hidden="true">{section.icon}</span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {section.title}
              </h3>
            </div>

            {section.description && (
              <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                {section.description}
              </p>
            )}

            {section.items.length > 0 && (
              <ul className="space-y-2.5">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <span className="text-foreground/80 font-body text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgramSections;
