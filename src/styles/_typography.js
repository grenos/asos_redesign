import { StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';

export const styles = StyleSheet.create({
  navTitle: {
    ...iOSUIKit.largeTitleEmphasized
  },
  header: {
    ...iOSUIKit.largeTitleEmphasized
  },
  subHeader: {
    ...iOSUIKit.title3Emphasized
  },
  text: {
    ...iOSUIKit.body
  }
});
