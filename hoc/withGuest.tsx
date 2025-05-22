'use client';

import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/store/store';
import RedirectIndicator from '@/components/RedirectIndicator';
// import { RootState } from '@/store';

export default function withGuest<P extends object>(Component: React.ComponentType<P>): React.FC<P> {
    const WrappedComponent: React.FC<P> = (props: P) => {
        const auth = useSelector((state: RootState) => state.sliceAuth.data);
        const router = useRouter();

        useEffect(() => {
            if (auth && auth.token) {
                router.push('/');
            }
        }, [auth, router]);

        if (auth && auth.token) {
            return <RedirectIndicator />
        }

        return <Component {...props} />;
    };

    return WrappedComponent;
}