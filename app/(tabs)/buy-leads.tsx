import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type LeadType = {
  id: number;
  name: string;
  age: number;
  location: string;
  interest: string;
  interestScore: number;
  match: number;
  language: string;
  advisorGender: string;
  category: string;
  premium: number;
  avatarColor: string;
};

export default function BuyLeadsScreen() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['Pune', 'Health']);
  
  const leads: LeadType[] = [
    {
      id: 1,
      name: 'Ramesh',
      age: 38,
      location: 'Pune',
      interest: 'Wants to learn more about',
      interestScore: 89,
      match: 91,
      language: 'Hindi',
      advisorGender: 'Female',
      category: 'Health Insurance',
      premium: 8000,
      avatarColor: '#4f46e5',
    },
    {
      id: 2,
      name: 'Priya',
      age: 32,
      location: 'Mumbai',
      interest: 'Wants coverage for',
      interestScore: 92,
      match: 95,
      language: 'Hindi',
      advisorGender: 'Male',
      category: 'Term Life',
      premium: 12000,
      avatarColor: '#8b5cf6',
    }
  ];
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="bg-[#04457E] py-5 px-4 flex-row justify-between items-center">
        <Text className="text-white text-2xl font-bold">Gromo+</Text>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex-1">
        <View className="px-4 py-5">
          {/* Header with avatar */}
          <View className="flex-row items-center mb-4">
            <View className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#18FFAA]">
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                className="w-full h-full"
              />
            </View>
            <View className="ml-3">
              <Text className="text-[#04457E] text-xl font-bold">Buy Leads</Text>
              <Text className="text-gray-600 text-sm">
                AI-curated, high-intent prospects selected for you
              </Text>
            </View>
          </View>
          
          {/* Matching Banner */}
          <View className="bg-[#04457E] p-4 rounded-xl mb-4">
            <View className="flex-row items-center mb-2">
              <MaterialCommunityIcons name="lightning-bolt" size={20} color="#FFD700" />
              <Text className="text-white text-lg font-bold ml-1">
                We found leads that match your strengths!
              </Text>
            </View>
            
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="bg-[#3b82f6] bg-opacity-30 py-1 px-2 rounded-md flex-row items-center mr-3">
                  <MaterialIcons name="language" size={16} color="white" />
                  <Text className="text-white ml-1">Hindi</Text>
                </View>
                
                <View className="bg-[#3b82f6] bg-opacity-30 py-1 px-2 rounded-md flex-row items-center">
                  <MaterialCommunityIcons name="tag-multiple" size={16} color="white" />
                  <Text className="text-white ml-1">Term Life, Health</Text>
                </View>
              </View>
            </View>
            
            <View className="flex-row items-center justify-between mt-3">
              <View className="flex-row items-center">
                <MaterialCommunityIcons name="medal" size={22} color="#FFD700" />
                <Text className="text-white font-bold text-xl ml-1">92% Match</Text>
              </View>
              
              <TouchableOpacity className="bg-[#3b82f6] bg-opacity-40 py-1 px-4 rounded-lg">
                <Text className="text-white font-medium">Premium Leads</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Filters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
            <TouchableOpacity 
              className={`flex-row items-center mr-2 py-2 px-4 rounded-full ${activeFilters.includes('Filters') ? 'bg-[#04457E]' : 'bg-white border border-gray-300'}`}
              onPress={() => toggleFilter('Filters')}
            >
              <Ionicons name="funnel" size={18} color={activeFilters.includes('Filters') ? "white" : "#04457E"} />
              <Text className={`ml-1 font-medium ${activeFilters.includes('Filters') ? 'text-white' : 'text-[#04457E]'}`}>Filters</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className={`flex-row items-center mr-2 py-2 px-4 rounded-full ${activeFilters.includes('Pune') ? 'bg-[#04457E]' : 'bg-white border border-gray-300'}`}
              onPress={() => toggleFilter('Pune')}
            >
              <Ionicons name="location" size={18} color={activeFilters.includes('Pune') ? "white" : "#04457E"} />
              <Text className={`ml-1 font-medium ${activeFilters.includes('Pune') ? 'text-white' : 'text-[#04457E]'}`}>Pune</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className={`flex-row items-center mr-2 py-2 px-4 rounded-full ${activeFilters.includes('Health') ? 'bg-[#04457E]' : 'bg-white border border-gray-300'}`}
              onPress={() => toggleFilter('Health')}
            >
              <Ionicons name="heart" size={18} color={activeFilters.includes('Health') ? "white" : "#04457E"} />
              <Text className={`ml-1 font-medium ${activeFilters.includes('Health') ? 'text-white' : 'text-[#04457E]'}`}>Health</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className={`flex-row items-center mr-2 py-2 px-4 rounded-full ${activeFilters.includes('Term') ? 'bg-[#04457E]' : 'bg-white border border-gray-300'}`}
              onPress={() => toggleFilter('Term')}
            >
              <Ionicons name="shield-checkmark" size={18} color={activeFilters.includes('Term') ? "white" : "#04457E"} />
              <Text className={`ml-1 font-medium ${activeFilters.includes('Term') ? 'text-white' : 'text-[#04457E]'}`}>Term</Text>
            </TouchableOpacity>
          </ScrollView>
          
          {/* Lead Cards */}
          {leads.map((lead) => (
            <View key={lead.id} className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              {/* Lead Header */}
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 rounded-full bg-[#4f46e5] items-center justify-center">
                    <Ionicons name="person" size={18} color="white" />
                  </View>
                  <View className="ml-2">
                    <View className="flex-row items-center">
                      <Text className="font-bold text-gray-800">{lead.name}</Text>
                      <Text className="text-gray-500 ml-1">({lead.age} yrs)</Text>
                    </View>
                    <View className="flex-row items-center">
                      <Ionicons name="location" size={12} color="#f87171" />
                      <Text className="text-gray-500 text-sm ml-1">{lead.location}</Text>
                    </View>
                  </View>
                </View>
                
                <View className="flex-row items-center">
                  <Ionicons name="heart" size={14} color="#8b5cf6" />
                  <Text className="text-[#8b5cf6] font-medium ml-1">
                    {lead.id === 1 ? "Health" : "Term Life"}
                  </Text>
                </View>
              </View>
              
              {/* Lead Interest */}
              <View className="flex-row justify-between items-start mb-3">
                <View className="flex-row items-center max-w-[60%]">
                  <Ionicons name="chatbubble-ellipses-outline" size={18} color="#6b7280" />
                  <Text className="text-gray-700 ml-1 mr-1">
                    {lead.interest}
                  </Text>
                </View>
                
                <Text className={`font-medium ${lead.id === 1 ? 'text-[#8b5cf6]' : 'text-[#4f46e5]'}`}>
                  {lead.id === 1 ? "Health Insurance" : "family"}
                </Text>
              </View>
              
              {/* Lead Stats */}
              <View className="flex-row justify-between items-center border-t border-gray-100 pt-3">
                <View className="flex-1 flex-row items-center">
                  <View className="bg-green-100 px-2 py-1 rounded-md mr-2">
                    <Text className="text-green-600 text-xs font-medium">
                      Interest Score: {lead.interestScore}
                    </Text>
                  </View>
                  
                  <View className="bg-gray-100 rounded-md px-2 py-1 flex-row items-center mr-2">
                    <MaterialIcons name="language" size={12} color="#6b7280" />
                    <Text className="text-gray-600 text-xs ml-1">Hindi</Text>
                  </View>
                  
                  <View className="bg-purple-100 rounded-md px-2 py-1 flex-row items-center">
                    <Ionicons name="person" size={12} color="#8b5cf6" />
                    <Text className="text-purple-600 text-xs ml-1">
                      {lead.advisorGender} Advisor
                    </Text>
                  </View>
                </View>
                
                <View>
                  <Text className="text-xs text-gray-500">Avg Premium:</Text>
                  <Text className="text-green-600 font-bold text-right">
                    ₹{(lead.premium/1000).toFixed(0)}k
                  </Text>
                </View>
              </View>
              
              {/* Match and Add Button */}
              <View className="flex-row items-center justify-between mt-3">
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="medal" size={18} color="#10b981" />
                  <Text className="text-green-500 font-bold ml-1">
                    Match {lead.match}%
                  </Text>
                </View>
                
                <View className="flex-row items-center">
                  <TouchableOpacity 
                    className="bg-[#4f46e5] rounded-l-lg px-5 py-2 flex-row items-center"
                  >
                    <Ionicons name="add" size={18} color="white" />
                    <Text className="text-white font-medium ml-1">
                      Add to My Leads
                    </Text>
                  </TouchableOpacity>
                  
                  <View className="bg-[#3b82f6] rounded-r-lg p-2">
                    <Text className="text-white font-bold">₹{lead.id === 1 ? '10' : '15'}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}