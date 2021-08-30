import {SafeAreaView, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React, { Suspense } from 'react';
import {useTranslation} from 'react-i18next';

const App: () => Node = () => {
  return (
      <Suspense fallback={<Text>Loading... </Text>}>
        <MyComponent/>
      </Suspense>
  );
};

function MyComponent() {
  const { t } = useTranslation();

  return <SafeAreaView style={Colors.lighter}>
    <Text>{t('textSimple1')}</Text>
    <Text>{t('textSimple2')}</Text>
    <Text>{t('textWithCount', {count:1})}</Text>
    <Text>{t('textWithCount', {count:5})}</Text>
  </SafeAreaView>
}

export default App;
