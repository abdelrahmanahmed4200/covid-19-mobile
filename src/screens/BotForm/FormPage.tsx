import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
type InputType = 'picker' | 'radio' | 'checkbox' | 'text';

type FormPageProps = {
  callback: (answer: string) => void;
  explanation: string;
  inputType?: InputType;
  question: string;
  questionType: string;
  subQuestions: [];
};

// const BubbleText = (text) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={{ backgroundColor: 'blue' }}>
//     <Text style={{ color: 'white' }}>{text}</Text>
//   </TouchableOpacity>
// )

const renderInputComponent = ({
  callback,
  explanation,
  inputType,
  question,
  questionType,
  subQuestions,
}) => {
  const [value, setValue] = useState('');

  switch (inputType) {
    case 'text':
      return (
        <>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value={value}
            onChangeText={setValue}
          />
          <Button
            title={'submit'}
            onPress={() => callback(value, questionType)}
          />
        </>
      );
      break;

    case 'radio':
      break;
    case 'picker':
      break;
    case 'checkbox':
      break;

    default:
      break;
  }
};

const FormPage = ({ route }) => {
  const {
    callback = () => {},
    explanation = '',
    inputType = 'text',
    question = '',
    questionType = '',
    subQuestions = [],
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <Text style={styles.questionText}>{explanation}</Text>
      </View>
      <View style={styles.answerContainer}>
        {renderInputComponent({
          callback,
          explanation,
          inputType,
          question,
          questionType,
          subQuestions,
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 40,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  answerContainer: {
    flex: 1,
  },
});

export default FormPage;
