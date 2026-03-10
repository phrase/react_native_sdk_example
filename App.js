import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App: () => Node = () => {
  return (
    <Suspense fallback={<Text>Loading... </Text>}>
      <MyComponent />
    </Suspense>
  );
};

function MyComponent() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('textSimple1')}</Text>
      <Text>{t('textSimple2')}</Text>
      <Text>{t('textWithCount', { count: 1 })}</Text>
      <Text>{t('textWithCount', { count: 5 })}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
});

export default App;
