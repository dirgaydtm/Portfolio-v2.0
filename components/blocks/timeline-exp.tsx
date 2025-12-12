"use client";

import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, type LucideIcon } from "lucide-react";

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  icon?: LucideIcon;
}

interface TimelineExpProps {
  items: TimelineItem[];
  className?: string;
}

export function TimelineExp({ items, className }: TimelineExpProps) {
  if (!items?.length) return null;

  const lineHeight = (items.length / (items.length + 1)) * 100;

  return (
    <div className={className}>
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute top-0 w-0.5 bg-zinc-700 left-5 md:left-1/2 md:-translate-x-1/2"
          style={{ height: `${lineHeight}%` }}
        />

        {items.map((item, i) => {
          const Icon = item.icon || Building2;
          const isRight = i % 2 === 0;

          return (
            <div
              key={item.company}
              className={`relative flex items-start pb-12 last:pb-0 ${isRight ? "md:justify-end" : "md:justify-start"}`}
            >
              {/* Icon */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 size-10 flex items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-900">
                <Icon className="size-5 text-zinc-400" />
              </div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] space-y-3 text-left ${isRight ? "md:text-left md:pl-4" : "md:text-right md:pr-4"}`}
              >
                <div className={`flex items-center gap-2.5 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="shrink-0 size-9 rounded-full flex items-center justify-center">
                    <Building2 className="size-5 text-zinc-500" />
                  </div>
                  <span className="text-base font-medium text-zinc-50">
                    {item.company}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                    {item.title}
                  </h3>
                  <div className={`flex items-center gap-2 mt-1 text-sm text-zinc-500 ${isRight ? "md:justify-start" : "md:justify-end"}`}>
                    <Calendar className="size-4" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                <div className={`flex flex-wrap gap-2 ${isRight ? "md:justify-start" : "md:justify-end"}`}>
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineExp;

