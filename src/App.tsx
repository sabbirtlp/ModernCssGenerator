import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Tabs } from './components/Tabs';
import { NeumorphicGenerator } from './components/NeumorphicGenerator';
import { GlassmorphismGenerator } from './components/GlassmorphismGenerator';
import { GradientBorderGenerator } from './components/GradientBorderGenerator';

export default function App() {
  const tabs = [
    { id: 'neumorphic', label: 'Neumorphic', component: NeumorphicGenerator },
    { id: 'glassmorphism', label: 'Glassmorphism', component: GlassmorphismGenerator },
    { id: 'gradient-border', label: 'Gradient Border', component: GradientBorderGenerator }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Modern CSS Generator
        </h1>
        <Tabs tabs={tabs} />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}