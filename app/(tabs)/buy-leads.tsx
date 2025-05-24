import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function BuyLeadsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <View className="py-4">
          <Text className="text-2xl font-bold text-[#1a4689] mb-4">Buy Leads</Text>
          <Text className="text-gray-600 mb-6">
            Discover and connect with potential clients in your region.
          </Text>
          
          {/* Placeholder content */}
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">Available Leads</Text>
            <Text className="text-gray-600">Placeholder for leads marketplace</Text>
          </View>
          
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">Lead Categories</Text>
            <Text className="text-gray-600">Placeholder for different lead categories</Text>
          </View>
          
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-gray-800 font-semibold mb-2">Purchase History</Text>
            <Text className="text-gray-600">Placeholder for previous lead purchases</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}