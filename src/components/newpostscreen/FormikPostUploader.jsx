import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

const uploadPostSchema = Yup.object().shape({
  caption: Yup.string()
    .min(1, 'Caption is required')
    .max(2200, 'Caption has reached its maximum limit'),
  imageUrl: Yup.string().url().required('image URL is required'),
});

const EXAMPlE_IMAGE =
  'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800';

const FormikPostUploader = () => {
  const [image, setImage] = useState('');
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const pickImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (image !== '') {
    return (
      <Formik
        initialValues={{ caption: '', imageUrl: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        <>
          <View>
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View>
            <TextInput
              style={{ backgroundColor: 'yellow' }}
              placeholder='write a caption!!!'
              multiline={true}
            />
          </View>
        </>
      </Formik>
    );
  } else {
    return (
      <Formik
        initialValues={{ caption: '', imageUrl: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        {(handleChangeText, handelSubmit) => (
          <>
            <TouchableOpacity
              onPress={pickImage}
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 40,
                  color: '#fff',
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            <View>
              <TextInput
                style={{
                  marginVertical: 20,
                  padding: 10,
                  borderColor: '#000eee',
                  borderWidth: 0.5,
                  borderRadius: 30,
                }}
                placeholder='write a caption!!!'
                multiline={true}
              />
            </View>

            <Button title='Post' />
          </>
        )}
      </Formik>
    );
  }
};

export default FormikPostUploader;
