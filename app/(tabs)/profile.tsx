import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const navigateToMyLeads = () => {
    router.push('/my-leads');
  };
  
  const navigateToCallAnalysis = () => {
    router.push('/ai-call-analysis');
  };
  
  const navigateToPracticeArena = () => {
    router.push('/ai-practice-arena');
  };
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <View className="py-4">
          <View className="items-center mb-6">
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              className="w-24 h-24 rounded-full mb-3"
            />
            <Text className="text-2xl font-bold text-primary">Rahul Kumar</Text>
            <Text className="text-gray-600">GroMo Partner</Text>
          </View>
          
          {/* Performance Stats */}
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">Performance Metrics</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-primary font-bold text-lg">42</Text>
                <Text className="text-gray-600 text-sm">Leads</Text>
              </View>
              <View className="items-center">
                <Text className="text-primary font-bold text-lg">18</Text>
                <Text className="text-gray-600 text-sm">Customers</Text>
              </View>
              <View className="items-center">
                <Text className="text-primary font-bold text-lg">₹32K</Text>
                <Text className="text-gray-600 text-sm">Revenue</Text>
              </View>
            </View>
          </View>
          
          {/* Button Group */}
          <View className="space-y-3 mb-4">
            {/* Post-Sale Dashboard Button */}
            <TouchableOpacity 
              className="flex-row items-center justify-between bg-primary p-4 rounded-lg"
              onPress={navigateToMyLeads}
            >
              <View className="flex-row items-center">
                <View className="bg-white rounded-full p-2 mr-3">
                  <Ionicons name="people" size={20} color="primaryś" />
                </View>
                <Text className="text-white font-semibold text-lg">Post-Sale Dashboard</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
            
            {/* AI Call Analysis Button */}
            <TouchableOpacity 
              className="flex-row items-center justify-between bg-[#18FFAA] p-4 rounded-lg"
              onPress={navigateToCallAnalysis}
            >
              <View className="flex-row items-center">
                <View className="bg-primary rounded-full p-2 mr-3">
                  <Ionicons name="analytics" size={20} color="#18FFAA" />
                </View>
                <Text className="text-primary font-semibold text-lg">AI Call Analysis</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="primaryś" />
            </TouchableOpacity>
            
            {/* AI Practice Arena Button */}
            <TouchableOpacity 
              className="flex-row items-center justify-between bg-primary p-4 rounded-lg"
              onPress={navigateToPracticeArena}
            >
              <View className="flex-row items-center">
                <View className="bg-[#18FFAA] rounded-full p-2 mr-3">
                  <Ionicons name="fitness" size={20} color="primaryś" />
                </View>
                <Text className="text-white font-semibold text-lg">AI Practice Arena</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Other Profile Options */}
          <View className="space-y-2 mb-4">
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="card-outline" size={24} color="primaryś" />
              <Text className="text-gray-800 ml-3">Payment Details</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="document-text-outline" size={24} color="primaryś" />
              <Text className="text-gray-800 ml-3">My Documents</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="settings-outline" size={24} color="primaryś" />
              <Text className="text-gray-800 ml-3">Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="help-circle-outline" size={24} color="primaryś" />
              <Text className="text-gray-800 ml-3">Help & Support</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="log-out-outline" size={24} color="#dc2626" />
              <Text className="text-red-600 ml-3">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}