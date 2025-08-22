import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera, Eye, EyeOff } from 'lucide-react';
import Button from './Button';

const DiagnosisSection: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded authentication
    if (formData.email === 'abcd' && formData.password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Please use username: abcd and password: 1234');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center px-8 py-16"
      id="diagnosis"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            AI Skin Diagnosis
          </h2>
          <p className="text-xl text-textSecondary">
            Upload your skin image for instant AI-powered analysis
          </p>
        </motion.div>

        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-lg p-8 max-w-md mx-auto"
          >
            <h3 className="text-2xl font-semibold text-textPrimary mb-6 text-center">
              Login to Continue
            </h3>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Enter username (abcd)"
                />
              </div>
              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-12"
                    placeholder="Enter password (1234)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-textSecondary hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login & Continue
              </Button>
              <div className="text-center text-sm text-textSecondary mt-4 p-3 bg-blue-50 rounded-lg">
                <p><strong>Demo Credentials:</strong></p>
                <p>Username: <code className="bg-white px-2 py-1 rounded">****</code></p>
                <p>Password: <code className="bg-white px-2 py-1 rounded">****</code></p>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-textPrimary mb-6">
                  Upload Your Image
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-textPrimary font-medium mb-2">
                      Drop your image here or click to browse
                    </p>
                    <p className="text-textSecondary text-sm">
                      Supports JPG, PNG, WebP (Max 10MB)
                    </p>
                  </label>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button className="flex-1">
                    <Camera className="mr-2 h-5 w-5" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Gallery
                  </Button>
                </div>
              </div>

              <div>
                {uploadedImage ? (
                  <div>
                    <h3 className="text-2xl font-semibold text-textPrimary mb-6">
                      Analysis Result
                    </h3>
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Analysis Complete ✓
                      </h4>
                      <p className="text-green-700 text-sm">
                        Your skin looks healthy! We recommend regular moisturizing 
                        and daily sunscreen application. Consult a dermatologist 
                        for professional advice.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-gray-200 rounded-full p-6 inline-block mb-4">
                        <Camera className="h-12 w-12 text-gray-400" />
                      </div>
                      <p className="text-textSecondary">
                        Upload an image to see AI analysis results
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default DiagnosisSection;