'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { store } from '@/store';
import i18n from '@/app/lib/i18n';

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </Provider>
    );
}
