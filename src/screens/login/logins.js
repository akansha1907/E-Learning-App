import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import HeaderDark from '../../components/headerDark/HeaderDark';
import Button from '../../components/button/Button';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [emailR, setEmailR] = useState('');
  const [passwordR, setPasswordR] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '894443979783-b89ekcj6409giggv7mgem7vjkio3dbp9.apps.googleusercontent.com',
      iosClientId:
        '43369841677-mtn9lud3bkk4q8a9dis5hbg0jj2cqf3q.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  const loginWithEmail = async () => {
    console.log('logon with signup');
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log('result ', result);
    } catch (e) {
      console.log('errror ', e);
    }
  };

  const registerWithEmail = async () => {
    if (name !== '' && emailR !== '' && passwordR !== '') {
      try {
        const result = await auth().createUserWithEmailAndPassword(
          emailR,
          passwordR,
        );
        console.log('result ', result);
      } catch (e) {
        console.log('errror ', e);
      }
    } else {
      Alert.alert('Enter Required fields');
    }
  };

  const continueWithGoogle = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const signInResult = await GoogleSignin.signIn();

      // Try the new style of google-sign in result, from v13+ of that module
      let idToken = signInResult.data?.idToken;
      if (!idToken) {
        // if you are using older versions of google-signin, try old style result
        idToken = signInResult.idToken;
      }
      if (!idToken) {
        throw new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        signInResult.data.idToken,
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code == statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign-in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Error:', error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <HeaderDark />
      <View style={styles.card}>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.button}
            title="Sign In"
            textStyle={styles.textStyle2}
            onPress={() => setIsSignUp(false)}
          />
          <Button
            buttonStyle={[styles.button, styles.whiteBtn]}
            title="Sign Up"
            textStyle={styles.textStyle}
            onPress={() => setIsSignUp(true)}
          />
        </View>
        {isSignUp ? (
          <View style={{flex: 1, width: '100%', marginTop: 50, gap: 20}}>
            <TextInput
              value={emailR}
              onChangeText={e => setEmailR(e)}
              placeholder="Enter Email id"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                paddingVertical: 10,
                fontSize: 18,
              }}
            />
            <TextInput
              value={passwordR}
              onChangeText={e => setPasswordR(e)}
              placeholder="Enter password"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                paddingVertical: 10,
                fontSize: 18,
              }}
            />
            <TextInput
              value={name}
              onChangeText={e => setName(e)}
              placeholder="Enter Name"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                paddingVertical: 10,
                fontSize: 18,
              }}
            />
            <Button
              title="Submit"
              buttonStyle={{
                width: '100%',
                paddingVertical: 8,
                borderRadius: 20,
                marginTop: 50,
              }}
              onPress={registerWithEmail}
            />
          </View>
        ) : (
          <View style={{flex: 1, width: '100%', marginTop: 50, gap: 20}}>
            <TextInput
              value={email}
              onChangeText={e => setEmail(e)}
              placeholder="Enter Email id"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                paddingVertical: 10,
                marginVertical: 30,
                fontSize: 18,
              }}
            />
            <TextInput
              value={password}
              onChangeText={e => setPassword(e)}
              placeholder="Enter password"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                paddingVertical: 10,
                fontSize: 18,
              }}
            />
            <Button
              title={'Login'}
              buttonStyle={{
                width: '100%',
                paddingVertical: 8,
                borderRadius: 20,
                marginTop: 50,
              }}
              onPress={loginWithEmail}
            />
            <Pressable
              style={{
                borderWidth: 0.5,
                borderColor: 'grey',
                alignItems: 'center',
                borderRadius: 20,
                paddingVertical: 10,
              }}
              onPress={continueWithGoogle}>
              <Text>Continue with Google</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;
