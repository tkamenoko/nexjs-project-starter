import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './layout.module.scss';

export default function Layout({
  title,
  children,
}: PropsWithChildren<{ title: string }>): ReactElement {
  return (
    <div className={styles.container}>
      <NextSeo titleTemplate="%s | Your Site Name" title={title} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.app}>{children}</main>
    </div>
  );
}
