import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/services/api";

interface ProfileFields {
  phoneNumber?: string;
  address?: string;
  courtId?: string;
  jurisdiction?: string[];
  barNumber?: string;
  specialization?: string[];
  yearsOfExperience?: number;
}

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [profile, setProfile] = useState<ProfileFields>({});
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle profile field changes
  const handleProfileChange = (field: keyof ProfileFields, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  // Get role-specific fields
  const getRoleSpecificFields = () => {
    switch (role) {
      case 'judge':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="courtId">Court ID</Label>
              <Input
                id="courtId"
                placeholder="Enter court ID"
                value={profile.courtId || ''}
                onChange={(e) => handleProfileChange('courtId', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jurisdiction">Jurisdiction</Label>
              <Input
                id="jurisdiction"
                placeholder="Enter jurisdiction"
                value={profile.jurisdiction?.[0] || ''}
                onChange={(e) => handleProfileChange('jurisdiction', [e.target.value])}
                required
              />
            </div>
          </>
        );
      case 'lawyer':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="barNumber">Bar Number</Label>
              <Input
                id="barNumber"
                placeholder="Enter bar number"
                value={profile.barNumber || ''}
                onChange={(e) => handleProfileChange('barNumber', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input
                id="specialization"
                placeholder="Enter specialization"
                value={profile.specialization?.[0] || ''}
                onChange={(e) => handleProfileChange('specialization', [e.target.value])}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                type="number"
                placeholder="Enter years of experience"
                value={profile.yearsOfExperience || ''}
                onChange={(e) => handleProfileChange('yearsOfExperience', parseInt(e.target.value))}
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Login form submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { token, user } = await auth.login(email, password);
      localStorage.setItem('token', token);
      login(user);
      toast.success("Successfully logged in");
      navigate("/dashboard");
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.response?.data?.message || error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Signup form submission
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      toast.error("Please select a role");
      return;
    }
    setIsLoading(true);
    
    try {
      const { token, user } = await auth.register({
        email,
        password,
        fullName,
        role,
        profile: {
          phoneNumber: profile.phoneNumber,
          address: profile.address,
          ...(role === 'judge' && {
            courtId: profile.courtId,
            jurisdiction: profile.jurisdiction
          }),
          ...(role === 'lawyer' && {
            barNumber: profile.barNumber,
            specialization: profile.specialization,
            yearsOfExperience: profile.yearsOfExperience
          })
        }
      });
      
      localStorage.setItem('token', token);
      login(user);
      toast.success("Account created successfully");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4 py-3">
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
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

            {/* Common profile fields */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="Enter phone number"
                value={profile.phoneNumber || ''}
                onChange={(e) => handleProfileChange('phoneNumber', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter address"
                value={profile.address || ''}
                onChange={(e) => handleProfileChange('address', e.target.value)}
              />
            </div>

            {/* Role-specific fields */}
            {getRoleSpecificFields()}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
