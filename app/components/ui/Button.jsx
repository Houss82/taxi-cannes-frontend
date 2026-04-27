import Link from "next/link"

export default function Button({ 
  children, 
  href, 
  size = "default", 
  variant = "default",
  className = "",
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none"
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8",
    xl: "h-14 px-8 text-base sm:text-lg gap-2",
  }
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent text-accent-foreground hover:opacity-90",
    call: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md",
    secondary:
      "border-2 border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 shadow-sm",
    secondaryInverse:
      "border-2 border-white/45 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  }
  
  // Si className contient bg-*, on n'applique pas le variant pour éviter les conflits
  const hasCustomBg = className.includes("bg-")
  const variantClass = hasCustomBg ? "" : variantClasses[variant]
  
  // className est appliqué en dernier pour permettre l'override des variants
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClass} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

