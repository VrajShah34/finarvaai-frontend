import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <View className="py-4">
          <View className="items-center mb-6">
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              className="w-24 h-24 rounded-full mb-3"
            />
            <Text className="text-2xl font-bold text-[#1a4689]">Rahul Kumar</Text>
            <Text className="text-gray-600">GroMo Partner</Text>
          </View>
          
          {/* Placeholder content */}
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">Personal Information</Text>
            <Text className="text-gray-600">Placeholder for user details</Text>
          </View>
          
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">Performance Metrics</Text>
            <Text className="text-gray-600">Placeholder for user performance stats</Text>
          </View>
          
          <View className="space-y-2 mb-4">
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="settings-outline" size={24} color="#1a4689" />
              <Text className="text-gray-800 ml-3">Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center bg-gray-100 p-4 rounded-lg">
              <Ionicons name="help-circle-outline" size={24} color="#1a4689" />
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