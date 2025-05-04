import { store } from '@/src/app-root/config';
import '@/src/app-root/ui/global.css';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
