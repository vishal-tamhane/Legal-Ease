
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/user";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<UserRole | ''>('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // Login form submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login (in a real app, you would verify credentials)
    setTimeout(() => {
      // Simulate getting user data from API
      const loginEmail = (e.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
      
      const mockUser = {
        id: '123',
        name: 'Test User',
        email: loginEmail.value,
        role: 'judge' as UserRole, // In a real app, this would come from the backend
      };
      
      login(mockUser);
      setIsLoading(false);
      toast.success("Successfully logged in");
      navigate("/dashboard");
    }, 1500);
  };

  // Signup form submission
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!role) {
      toast.error("Please select a role");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup (in a real app, you would create a new user)
    setTimeout(() => {
      // Create a new user with the form data
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name: fullName,
        email: email,
        role: role,
      };
      
      login(newUser);
      setIsLoading(false);
      toast.success("Account created successfully");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login" className="space-y-4">
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoComplete="email"
                required
                className="transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="transition-all duration-300"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="signup" className="space-y-4">
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-fullname">Full Name</Label>
              <Input
                id="signup-fullname"
                placeholder="John Doe"
                type="text"
                required
                className="transition-all duration-300"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                placeholder="name@example.com"
                type="email"
                autoComplete="email"
                required
                className="transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                autoComplete="new-password"
                required
                className="transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="judge">Judge</SelectItem>
                  <SelectItem value="lawyer">Lawyer</SelectItem>
                  <SelectItem value="litigant">Litigant</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
