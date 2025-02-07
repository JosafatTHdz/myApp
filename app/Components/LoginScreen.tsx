import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";

interface InputFieldProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input} />
      </View>
    </View>
  );
};

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonSecondary: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const ForgotPasswordLink: React.FC = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
    </TouchableOpacity>
  );
};

const DividerWithText: React.FC = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
      <Text style={styles.dividerText}>o</Text>
      <View style={styles.divider} />
    </View>
  );
};

interface SocialLoginButtonProps {
  title: string;
  logoUrl: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ title, logoUrl }) => {
  return (
    <TouchableOpacity style={styles.socialButton}>
      <Image source={{uri: logoUrl}} style={styles.socialLogo} />
      <Text style={styles.socialButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://www.cyberpuerta.mx/out/cyberpuertaV5/img/logo2.png" }} style={styles.logo} />

      <InputField label="Correo electrónico" placeholder="Ingresa tu correo" />
      <InputField label="Contraseña" placeholder="Ingresa tu contraseña" secureTextEntry />

      <ForgotPasswordLink />

      <ButtonPrimary title="Iniciar sesión" onPress={() => Alert.alert("Inicio de sesión")} />
      <ButtonSecondary title="Registrarme" onPress={() => Alert.alert("Registro")} />

      <DividerWithText />

      <SocialLoginButton title="Iniciar sesión con Google" logoUrl="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
      <SocialLoginButton title="Iniciar sesión con Apple" logoUrl="https://cdn-icons-png.flaticon.com/512/154/154870.png" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 400,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
  },
  forgotPassword: {
    color: "#007BFF",
    textAlign: "center",
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  secondaryButtonText: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#888",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginVertical: 5,
    justifyContent: "center",
  },
  socialLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
});
