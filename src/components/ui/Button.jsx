import { Link } from 'react-router-dom';

const Button = ({ children, to, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 text-xs rounded-none border";
  
  const variants = {
    primary: "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] hover:bg-transparent hover:text-[var(--text-primary)]",
    outline: "bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={combinedClasses} {...props}>{children}</Link>;
  if (href) return <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  
  return <button className={combinedClasses} {...props}>{children}</button>;
};

export default Button;
