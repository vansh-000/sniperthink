import React from 'react';
import { TrendingUp, DollarSign, Star, Timer } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface LeadItem {
  type: 'Hot' | 'Warm' | 'Cold';
  count: number;
  color: string;
  bgColor: string;
}

interface InteractionItem {
  name: string;
  source: string;
  time: string;
  priority: 'High' | 'Medium' | 'Low';
  avatar: string;
  avatarBg: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color, bgColor }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-3">
      <span className="text-gray-600 text-sm font-medium">{title}</span>
      <div className={`p-2 rounded-lg ${bgColor}`}>
        {icon}
      </div>
    </div>
    <div className={`text-2xl font-bold ${color}`}>
      {value}
    </div>
  </div>
);

const LeadSegmentationItem: React.FC<LeadItem> = ({ type, count, color }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="text-gray-700 font-medium">{type} Leads</span>
    </div>
    <span className={`font-bold ${color === 'bg-red-500' ? 'text-red-600' : color === 'bg-yellow-500' ? 'text-yellow-600' : 'text-blue-600'}`}>
      {count}
    </span>
  </div>
);

const InteractionItem: React.FC<InteractionItem> = ({ name, source, time, priority, avatar, avatarBg }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center text-white font-semibold`}>
        {avatar}
      </div>
      <div>
        <div className="font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">{source} • {time}</div>
      </div>
    </div>
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${priority === 'High' ? 'bg-red-100 text-red-700' :
        priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-green-100 text-green-700'
      }`}>
      {priority}
    </span>
  </div>
);

const AnalyticsDashboard: React.FC = () => {
  const metrics: MetricCardProps[] = [
    {
      title: 'Active Conversations',
      value: '247',
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Conversion Rate',
      value: '34.5%',
      icon: <Star className="w-5 h-5 text-orange-600" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Response Time',
      value: '0.3s',
      icon: <Timer className="w-5 h-5 text-green-600" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Revenue',
      value: '$24.5K',
      icon: <DollarSign className="w-5 h-5 text-orange-600" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const leadData: LeadItem[] = [
    { type: 'Hot', count: 89, color: 'bg-red-500', bgColor: 'bg-red-50' },
    { type: 'Warm', count: 156, color: 'bg-yellow-500', bgColor: 'bg-yellow-50' },
    { type: 'Cold', count: 203, color: 'bg-blue-500', bgColor: 'bg-blue-50' }
  ];

  const interactions: InteractionItem[] = [
    {
      name: 'Sarah Johnson',
      source: 'Website',
      time: '2m ago',
      priority: 'High',
      avatar: 'SJ',
      avatarBg: 'bg-teal-500'
    },
    {
      name: 'Mike Chen',
      source: 'LinkedIn',
      time: '5m ago',
      priority: 'Medium',
      avatar: 'MC',
      avatarBg: 'bg-green-500'
    },
    {
      name: 'Emma Davis',
      source: 'Email',
      time: '8m ago',
      priority: 'High',
      avatar: 'ED',
      avatarBg: 'bg-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          <span className="text-teal-700 font-medium">Real-time Analytics</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Analytics Dashboard</h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Monitor your AI agents' performance with comprehensive real-time analytics and actionable insights.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Live
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Real-time
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                color={metric.color}
                bgColor={metric.bgColor}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Lead Segmentation</h3>
              <div className="space-y-1">
                {leadData.map((lead, index) => (
                  <LeadSegmentationItem
                    key={index}
                    type={lead.type}
                    count={lead.count}
                    color={lead.color}
                    bgColor={lead.bgColor}
                  />
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Interactions</h3>
              <div className="space-y-1">
                {interactions.map((interaction, index) => (
                  <InteractionItem
                    key={index}
                    name={interaction.name}
                    source={interaction.source}
                    time={interaction.time}
                    priority={interaction.priority}
                    avatar={interaction.avatar}
                    avatarBg={interaction.avatarBg}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;