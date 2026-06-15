'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-serif tracking-archive transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-gold-gradient text-ivory-50 shadow-certificate hover:shadow-gold-glow hover:brightness-105 active:brightness-95',
    secondary:
      'bg-transparent text-gold-600 border border-gold-500 hover:bg-gold-500/10 active:bg-gold-500/20',
    ghost:
      'bg-transparent text-ink-400 hover:text-gold-600 hover:bg-gold-500/5',
    outline:
      'bg-transparent text-ink-500 border border-ink-200 hover:border-gold-500 hover:text-gold-600',
  }

  const sizes = {
    sm:  'h-8  px-4  text-xs  gap-1.5 rounded-sm',
    md:  'h-10 px-6  text-sm  gap-2   rounded',
    lg:  'h-12 px-8  text-base gap-2.5 rounded',
    xl:  'h-14 px-10 text-lg  gap-3   rounded',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Обрабатываем...
        </>
      ) : (
        children
      )}
    </button>
  )
}
