"use client";

import { useEffect, useRef, isValidElement, cloneElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden box-border [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-border border dark:border-input shadow",
        outline: "border bg-transparent shadow-xs hover:bg-accent dark:bg-input/30 dark:border-input",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LayeredButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  borderWidth?: number;
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export function LayeredButton({
  className,
  variant,
  size,
  children,
  borderWidth = 3,
  asChild = false,
  ref,
  ...props
}: LayeredButtonProps) {
  const internalRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const hoverLabelRef = useRef<HTMLSpanElement>(null);

  const buttonRef = (ref as React.RefObject<HTMLButtonElement>) ?? internalRef;

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    const label = labelRef.current;
    const hoverLabel = hoverLabelRef.current;

    if (!button || !circle) return;

    const layout = () => {
      const { width: w, height: h } = button.getBoundingClientRect();

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;
      circle.style.left = "50%";
      circle.style.transform = "translateX(-50%) scale(0)";
      circle.style.transformOrigin = `50% ${originY}px`;

      if (label) label.style.transform = "translateY(0)";
      if (hoverLabel) {
        hoverLabel.style.transform = `translateY(${h + 12}px)`;
        hoverLabel.style.opacity = "0";
      }

      circle.dataset.scale = "1.2";
      if (label) label.dataset.moveY = (-(h + 8)).toString();
      if (hoverLabel) hoverLabel.dataset.startY = Math.ceil(h + 100).toString();
    };

    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [buttonRef]);

  const handleMouseEnter = () => {
    const circle = circleRef.current;
    const label = labelRef.current;
    const hoverLabel = hoverLabelRef.current;
    const easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";

    if (circle) {
      circle.style.transition = `transform 0.3s ${easing}`;
      circle.style.transform = `translateX(-50%) scale(${circle.dataset.scale || 1.2})`;
    }
    if (label) {
      label.style.transition = `transform 0.3s ${easing}`;
      label.style.transform = `translateY(${label.dataset.moveY || -50}px)`;
    }
    if (hoverLabel) {
      hoverLabel.style.transition = `transform 0.3s ${easing}, opacity 0.3s ${easing}`;
      hoverLabel.style.transform = "translateY(0)";
      hoverLabel.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const circle = circleRef.current;
    const label = labelRef.current;
    const hoverLabel = hoverLabelRef.current;
    const easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";

    if (circle) {
      circle.style.transition = `transform 0.2s ${easing}`;
      circle.style.transform = "translateX(-50%) scale(0)";
    }
    if (label) {
      label.style.transition = `transform 0.2s ${easing}`;
      label.style.transform = "translateY(0)";
    }
    if (hoverLabel) {
      hoverLabel.style.transition = `transform 0.2s ${easing}, opacity 0.2s ${easing}`;
      hoverLabel.style.transform = `translateY(${hoverLabel.dataset.startY || 100}px)`;
      hoverLabel.style.opacity = "0";
    }
  };

  const childContent =
    asChild && isValidElement(children)
      ? (children as React.ReactElement<{ children?: React.ReactNode }>).props.children
      : children;

  const buttonContent = (
    <>
      <span
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{ padding: borderWidth }}
      >
        <span className="block w-full h-full rounded-[inherit]" />
      </span>

      <span
        ref={circleRef}
        className="absolute rounded-full pointer-events-none will-change-transform bg-primary"
      />

      <span className="relative inline-flex items-center justify-center gap-2 z-2 px-4 py-2">
        <span
          ref={labelRef}
          className="inline-flex items-center justify-center gap-2 relative z-2 text-foreground will-change-transform"
        >
          {childContent}
        </span>
        <span
          ref={hoverLabelRef}
          className="inline-flex items-center justify-center gap-2 absolute left-0 top-0 z-3 whitespace-nowrap text-primary-foreground px-4 py-2 will-change-[transform,opacity]"
        >
          {childContent}
        </span>
      </span>
    </>
  );

  const sharedClassName = cn(buttonVariants({ variant, size }), "rounded-md p-0!", className);

  if (asChild && isValidElement(children)) {
    const childElement = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & { className?: string; ref?: React.Ref<HTMLElement> }
    >;
    /* eslint-disable react-hooks/refs */
    return cloneElement(
      childElement,
      {
        ...props,
        ref: buttonRef as React.Ref<HTMLElement>,
        className: cn(sharedClassName, childElement.props.className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      },
      buttonContent
    );
    /* eslint-enable react-hooks/refs */
  }

  return (
    <button
      ref={buttonRef}
      className={sharedClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {buttonContent}
    </button>
  );
}
