import React from 'react';
import { TrendingUp, Clock, Star, DollarSign } from 'lucide-react';

interface MetricItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="md:w-16 mx-2 md:h-16 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
      {icon}
    </div>
    <div className="text-lg mx-2 lg:text-3xl md:text-4xl flex items-center justify-center font-bold text-white mb-2">
      {value}
    </div>
    <div className="text-white/90 text-lg lg:text-xl flex items-center justify-center font-bold max-w-60 leading-tight">
      {label}
    </div>
  </div>
);

const Results: React.FC = () => {
  const metrics: MetricItemProps[] = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      value: '300%',
      label: 'Productivity Increase'
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: '85%',
      label: 'Manual Effort Reduction'
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      value: '95%',
      label: 'Customer Satisfaction'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      value: '$2.4M',
      label: 'Revenue Generated'
    }
  ];

  return (
    <section className="relative py-16 px-8 bg-gradient-to-r from-[#1A6262] to-[#91C499] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real metrics from real businesses using SniperThink
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricItem
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2"></div>
    </section>
  );
};

export default Results;