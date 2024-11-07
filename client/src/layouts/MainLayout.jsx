import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, PenTool, User, Settings } from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Write', href: '/write', icon: PenTool },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-card border-r">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-primary">BlogAI</h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={location.pathname === item.href ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
          
          {/* User Section */}
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;