import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
  TextInput, Platform, Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Linking } from 'react-native';
import Button from '../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { setOtp } from '../../redux/actions/authActions';

// Navigation & Route Types
type OTPScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Otp'>;
type OTPScreenRouteProp = RouteProp<AuthStackParamList, 'Otp'>;

const OTPScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phone = useSelector((state: RootState) => state.auth.phone);
  const navigation = useNavigation<OTPScreenNavigationProp>();
  const route = useRoute<OTPScreenRouteProp>();
  const { method } = route.params;

  const [otp, setOtpInput] = useState<string>('');

  const handleGoBack = () => navigation.goBack();

  const handleOtpChange = (text: string) => {
    setOtpInput(text);
    dispatch(setOtp(text));

    if (text.length === 4) {
      navigation.navigate('Role');
    }
  };

  // Handle Resend OTP
  const handleResendCode = () => {
    Alert.alert('Resend Code', 'A new OTP code has been sent to your number.');
    // You can add further logic to actually resend the code here
  };

  // Handle Open WhatsApp
  const handleOpenWhatsApp = () => {
    const message = 'I did not receive the OTP code. Please help.';
    const url = `whatsapp://send?phone=${phone}&text=${message}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'Please make sure WhatsApp is installed.'),
    );
  };

  return (
    <View style={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Title */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Enter the code</Text>
        <Text style={styles.subText}>
          We have sent you a verification code to {phone}
        </Text>
      </View>

      {/* OTP Input */}
      <TextInput
        style={styles.otpInput}
        value={otp}
        onChangeText={handleOtpChange}
        maxLength={4}
        keyboardType="number-pad"
        placeholder="Enter OTP"
        secureTextEntry
        autoFocus
      />

      {/* Resend Code */}
      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Resend code</Text>
      </TouchableOpacity>

      {/* Open WhatsApp Button */}
      <Button
        title={`Open ${method}`}
        onPress={handleOpenWhatsApp}
        backgroundColor="#E4E4E4"
        textColor="white"
        style={styles.button}
        textStyle={styles.customButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 30,
    left: 20,
  },
  goBackText: {
    fontSize: 20,
    color: '#333',
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  otpInput: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    padding: 10,
  },
  resendText: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 20,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  whatsappButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
  customButtonText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default OTPScreen;
