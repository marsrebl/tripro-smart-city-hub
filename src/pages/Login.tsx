
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { login, isLoading, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await login(email, password);
      toast({
        title: t('success'),
        description: 'Login successful! Welcome back.',
        duration: 3000,
      });
      navigate('/', { replace: true });
    } catch (error) {
      toast({
        title: t('error'),
        description: 'Login failed. Please check your credentials.',
        variant: 'destructive',
        duration: 4000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-municipal-blue via-municipal-blue-light to-municipal-green flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-municipal-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 z-10"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Home</span>
      </Link>

      {/* Main Login Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mb-6 shadow-2xl">
            <img 
              src="/src/images/logo.png" 
              alt="TriPro Municipality Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDRMMzYgMTJWMzZMMjQgNDRMMTIgMzZWMTJMMjQgNFoiIGZpbGw9IiMxZTQwYWYiLz4KPHN0cm9rZSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+';
              }}
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/80 text-lg">Sign in to TriPro Municipality</p>
        </div>

        {/* Login Form */}
        <div className="glass-effect rounded-2xl p-8 shadow-2xl animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-white font-medium text-sm">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 ${
                    errors.email ? 'border-red-400' : 'border-white/20'
                  } rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all duration-300 backdrop-blur-sm`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-red-300 text-sm flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-white font-medium text-sm">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  className={`w-full pl-12 pr-12 py-4 bg-white/10 border-2 ${
                    errors.password ? 'border-red-400' : 'border-white/20'
                  } rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all duration-300 backdrop-blur-sm`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-300 text-sm flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-white/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-municipal-green focus:ring-2 focus:ring-municipal-green"
                />
                <span className="text-sm">Remember me</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-white/80 hover:text-white transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-municipal-green to-municipal-green-dark hover:from-municipal-green-dark hover:to-municipal-green text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/80 text-sm font-medium mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-xs text-white/70">
              <p>Citizen: citizen@test.com / password</p>
              <p>Admin: admin@test.com / password</p>
              <p>Engineer: engineer@test.com / password</p>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-white/80 text-sm">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="text-white font-medium hover:underline transition-all duration-300"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-center space-x-6 text-sm text-white/60">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/help" className="hover:text-white transition-colors">Help</Link>
          </div>
          <p className="text-xs text-white/50">
            © 2024 TriPro Municipality. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
