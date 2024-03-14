export const buttonStyle = {
  variant: {
    solid: "",
    bordered: "border-medium bg-transparent",
    light: "bg-transparent",
    flat: "",
    faded: "border-medium",
    shadow: "",
    ghost: "border-medium bg-transparent",
  },
  size: {
    sm: "px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",
    md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",
    lg: "px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large",
  },
  color: {
    default: "",
    primary: "",
    secondary: "",
    success: "",
    warning: "",
    danger: "",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-small",
    md: "rounded-medium",
    lg: "rounded-large",
    full: "rounded-full",
  },
  fullWidth: {
    true: "w-full",
  },
  isDisabled: {
    true: "opacity-disabled pointer-events-none",
  },
  isInGroup: {
    true: "[&:not(:first-child):not(:last-child)]:rounded-none",
  },
  isIconOnly: {
    true: "px-unit-0 !gap-unit-0",
    false: "[&>svg]:max-w-[theme(spacing.unit-8)]",
  },
  disableAnimation: {
    true: "!transition-none",
    false:
      "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
  },
};
