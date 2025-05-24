import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

type LanguageOption = 'Marathi' | 'Hindi' | 'English' | 'Bengali';
type FinanceExperience = 'Yes' | 'No';

export default function OnboardingScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    region: '',
    languages: [] as LanguageOption[],
    occupation: '',
    financeExp: 'No' as FinanceExperience,
    expYears: ''
  });
  
  // State to track form completion stage
  const [formCompleted, setFormCompleted] = useState(false);

  const languages: LanguageOption[] = ['Marathi', 'Hindi', 'English', 'Bengali'];

  const toggleLanguage = (lang: LanguageOption) => {
    if (formData.languages.includes(lang)) {
      setFormData({
        ...formData,
        languages: formData.languages.filter(l => l !== lang)
      });
    } else {
      setFormData({
        ...formData,
        languages: [...formData.languages, lang]
      });
    }
  };

  const handleAutoDetect = () => {
    // Mock auto-detection functionality
    setFormData({
      ...formData,
      region: 'Pune – 411001'
    });
  };

  const handleFinanceExpToggle = (value: FinanceExperience) => {
    setFormData({
      ...formData,
      financeExp: value
    });
  };

  const handleSubmit = () => {
    // Switch to the AI persona view
    setFormCompleted(true);
  };

  const handleStartJourney = () => {
    // Navigate to the main app tabs
     router.replace('/assessment');
  };

  // Generate JSON representation of user data for the prompt
  const generatedPromptJson = `{ {
  "name": "${formData.fullName}",
  "age": ${formData.age},
  "gender": "${formData.gender}",
  "region": "${formData.region.split('–')[0].trim()}",
  "preferred_languages": ${JSON.stringify(formData.languages)},
  "occupation": "${formData.occupation}",
  "finance_experience": "${formData.expYears} years"
} }`;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ 
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: 'white' },
        headerLeft: () => (
            
            
          <View className="flex-row items-center">
            {formCompleted ? (
              <TouchableOpacity onPress={() => setFormCompleted(false)} className="mr-4">
                <Ionicons name="arrow-back" size={24} color="primary" />
              </TouchableOpacity>
            ) : null}
            <Text className="text-primary text-2xl font-bold">Gromo</Text>
            <Text className="text-green-500 text-2xl font-bold">+</Text>
          </View>
        )
      }} />
      
      <ScrollView className="px-5">
        <View className="pt-3 pb-8">
          {!formCompleted ? (
            // Form Fields Section
            <>
              {/* Header */}
              <View className="mb-6">
                <Text className="text-primary text-2xl font-bold mb-1">
                  Let's personalize your journey
                </Text>
                <Text className="text-gray-500">
                  Fill in your basic details to begin.
                </Text>
              </View>
              
              {/* Form Fields */}
              <View className="space-y-6">
                {/* Full Name */}
                <View>
                  <Text className="text-gray-700 mb-1">Full Name <Ionicons name="mic" size={16} color="primary" /></Text>
                  <TextInput
                    className="border-b border-gray-300 py-3"
                    value={formData.fullName}
                    onChangeText={(text) => setFormData({...formData, fullName: text})}
                    placeholder="Enter your full name"
                  />
                </View>
                
                {/* Age */}
                <View>
                  <Text className="text-gray-700 mb-1">Age <Ionicons name="mic" size={16} color="primary" /></Text>
                  <TextInput
                    className="border-b border-gray-300 py-3"
                    value={formData.age}
                    onChangeText={(text) => setFormData({...formData, age: text})}
                    keyboardType="numeric"
                    placeholder="Enter your age"
                  />
                </View>
                
                {/* Gender */}
                <View>
                  <Text className="text-gray-700 mb-1">Gender <Ionicons name="mic" size={16} color="primary" /></Text>
                  <TouchableOpacity className="border-b border-gray-300 py-3 flex-row justify-between items-center">
                    <Text className="text-black">{formData.gender}</Text>
                    <Ionicons name="chevron-down" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
                
                {/* Region/Pin Code */}
                <View>
                  <Text className="text-gray-700 mb-1">Region / Pin Code <Ionicons name="mic" size={16} color="primary" /></Text>
                  <View className="flex-row">
                    <TextInput
                      className="border-b border-gray-300 py-3 flex-1"
                      value={formData.region}
                      onChangeText={(text) => setFormData({...formData, region: text})}
                      placeholder="Enter your region or pin code"
                    />
                    <TouchableOpacity 
                      className="ml-2 bg-gray-100 rounded-md px-3 flex-row items-center"
                      onPress={handleAutoDetect}
                    >
                      <Ionicons name="location" size={16} color="#4ade80" />
                      <Text className="text-secondary ml-1">Auto</Text>
                    </TouchableOpacity>
                  </View>
                  <Text className="text-gray-400 text-xs mt-1">Auto-detect enabled. You may edit if needed.</Text>
                </View>
                
                {/* Language Preferences */}
                <View>
                  <Text className="text-gray-700 mb-2">
                    Which languages do you prefer for communication with your AI coach?
                  </Text>
                  <View className="flex-row flex-wrap gap-2">
                    {languages.map((lang) => (
                      <TouchableOpacity 
                        key={lang}
                        className={`py-2 px-4 rounded-full flex-row items-center ${
                          formData.languages.includes(lang) ? 'bg-secondary' : 'bg-gray-100'
                        }`}
                        onPress={() => toggleLanguage(lang)}
                      >
                        {formData.languages.includes(lang) && (
                          <Ionicons name="checkmark" size={16} color="white" className="mr-1" />
                        )}
                        <Text className={formData.languages.includes(lang) ? 'text-white' : 'text-gray-800'}>
                          {lang}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <Text className="text-gray-400 text-xs mt-1">
                    Your preference guides AI's language and voice style.
                  </Text>
                </View>
                
                {/* Work Background */}
                <View>
                  <Text className="text-gray-700 mb-2">Tell us a bit about your work background.</Text>
                  
                  {/* Occupation */}
                  <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-gray-700 w-1/3">Occupation</Text>
                    <TouchableOpacity className="border border-gray-300 rounded-md py-2 px-3 flex-row justify-between items-center flex-1">
                      <Text className="text-black">{formData.occupation}</Text>
                      <Ionicons name="chevron-down" size={20} color="gray" />
                    </TouchableOpacity>
                  </View>
                  
                  {/* Finance Experience */}
                  <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-gray-700 w-1/3">Finance Exp?</Text>
                    <View className="flex-row flex-1">
                      <TouchableOpacity 
                        className={`rounded-full py-2 px-6 mr-2 ${formData.financeExp === 'Yes' ? 'bg-secondary' : 'bg-gray-100'}`}
                        onPress={() => handleFinanceExpToggle('Yes')}
                      >
                        {formData.financeExp === 'Yes' && (
                          <Ionicons name="checkmark" size={16} color="white" style={{ position: 'absolute', left: 10, top: 10 }} />
                        )}
                        <Text className={`text-center ${formData.financeExp === 'Yes' ? 'text-white' : 'text-gray-800'}`}>Yes</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        className={`rounded-full py-2 px-6 ${formData.financeExp === 'No' ? 'bg-secondary' : 'bg-gray-100'}`}
                        onPress={() => handleFinanceExpToggle('No')}
                      >
                        <Text className={`text-center ${formData.financeExp === 'No' ? 'text-white' : 'text-gray-800'}`}>No</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                  {/* Experience Years */}
                  <View className="flex-row items-center">
                    <Text className="text-gray-700 w-1/3">Exp. Years</Text>
                    <TextInput
                      className="border border-gray-300 rounded-md py-2 px-3 w-20 text-center"
                      value={formData.expYears}
                      onChangeText={(text) => setFormData({...formData, expYears: text})}
                      keyboardType="numeric"
                    />
                    <Text className="ml-2 text-gray-500">years</Text>
                  </View>
                </View>
                
                {/* Continue Button */}
                <TouchableOpacity 
                  className="bg-primary py-4 rounded-xl mt-4"
                  onPress={handleSubmit}
                >
                  <Text className="text-white text-center font-bold">Continue</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            // AI Persona and Profile Summary Section
            <>
              {/* Assigned AI Persona Card */}
              <View className="bg-gray-50 rounded-xl p-5 mb-6">
                <View className="flex-row items-center mb-2">
                  <View className="h-5 w-5 rounded-full bg-secondary mr-2" />
                  <Text className="text-primary text-lg font-bold">Assigned AI Persona</Text>
                </View>
                
                <Text className="text-primary text-xl font-semibold mb-3">
                  "Confident Seller – Multilingual Urban Male with Experience"
                </Text>
                
                <View className="mb-2 flex-row">
                  <View style={{ width: 20 }}>
                    <Ionicons name="navigate-circle" size={16} color="primary" />
                  </View>
                  <Text className="text-black">
                    <Text className="text-primary font-semibold">Recommended: </Text>
                    Health Insurance, Monthly Plans
                  </Text>
                </View>
                
                <View className="mb-3 flex-row">
                  <View style={{ width: 20 }}>
                    <Ionicons name="volume-medium" size={16} color="primary" />
                  </View>
                  <Text className="text-black">
                    <Text className="text-primary font-semibold">AI Voice Tone: </Text>
                    Friendly, Local Accent (Marathi + Hindi)
                  </Text>
                </View>
                
                <Text className="text-gray-500 text-xs mb-2">Generated Prompt (passed to AI engine):</Text>
                
                <View className="bg-white rounded-lg p-3">
                  <Text className="font-mono text-xs text-gray-800">
                    {generatedPromptJson}
                  </Text>
                </View>
              </View>
              
              {/* Profile Summary Card */}
              <View className="bg-gray-50 rounded-xl p-5 mb-6">
                <View className="flex-row items-center mb-4">
                  <Ionicons name="person-outline" size={18} color="primary" />
                  <Text className="text-primary text-lg font-bold ml-2">Profile Summary</Text>
                </View>
                
                {/* Name, Age and Gender */}
                <View className="flex-row items-center mb-3">
                  <Ionicons name="person" size={16} color="primary" />
                  <Text className="text-primary font-semibold ml-2">{formData.fullName}</Text>
                  <Text className="text-gray-600 ml-2">• {formData.age} • {formData.gender}</Text>
                </View>
                
                {/* Location */}
                <View className="flex-row items-center mb-3">
                  <Ionicons name="location" size={16} color="#e53e3e" />
                  <Text className="text-gray-700 ml-2">Pune (411001)</Text>
                </View>
                
                {/* Languages */}
                <View className="flex-row items-center mb-3">
                  <Ionicons name="chatbubbles" size={16} color="#718096" />
                  <Text className="text-gray-700 ml-2">{formData.languages.join(', ')}</Text>
                </View>
                
                {/* Profession */}
                <View className="flex-row items-center">
                  <FontAwesome5 name="briefcase" size={14} color="#8b5cf6" />
                  <Text className="text-gray-700 ml-2">{formData.occupation} • {formData.expYears} Years in Finance</Text>
                </View>
              </View>
              
              {/* Start Journey Button */}
              <TouchableOpacity 
                className="bg-secondary py-4 rounded-xl mb-2 flex-row justify-center items-center"
                onPress={handleStartJourney}
              >
                <Ionicons name="rocket" size={20} color="primary" />
                <Text className="text-primary text-center font-bold ml-2">Start My AI Journey</Text>
              </TouchableOpacity>
              
              
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}