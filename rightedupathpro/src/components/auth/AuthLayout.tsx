import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => (
  <div className="min-h-screen flex">
    {/* Branding Side */}
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-muted via-background to-accent/30 relative overflow-hidden items-center justify-center p-12">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl float-animation-delayed" />
      <div className="relative z-10 text-center max-w-md">
        <Link to="/" className="font-display text-4xl font-bold tracking-tight">
          Righted<span className="text-gradient-lime">Upath</span>
        </Link>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          RightedUpath helps students check results, discover programs, apply seamlessly, and track their academic journey with clarity.
        </p>
      </div>
    </div>

    {/* Form Side */}
    <div className="flex-1 flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-md">
        <Link to="/" className="lg:hidden font-display text-2xl font-bold tracking-tight block text-center mb-8">
          Righted<span className="text-gradient-lime">Upath</span>
        </Link>
        <h1 className="font-display text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-2 mb-8">{subtitle}</p>
        {children}
      </div>
    </div>
  </div>
);

export default AuthLayout;
