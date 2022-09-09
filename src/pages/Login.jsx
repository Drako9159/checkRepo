import { View, TextInput, StyleSheet, Button } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/Login.js";
const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -10,
  },
});

const initialValues = {
  email: "",
  password: "",
};
function FormikInputValue({ name, ...props }) {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      ></StyledTextInput>
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
}
/*
function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  console.log(errors);
  return errors;

  //En fornik validate={validate}
}
*/
export default function Login() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={() => {
        (values) => console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="email"
              placeholder="email"
            ></FormikInputValue>
            <FormikInputValue
              name="password"
              placeholder="password"
              secureTextEntry
            ></FormikInputValue>
            <Button onPress={handleSubmit} title="Log In"></Button>
          </View>
        );
      }}
    </Formik>
  );
}
