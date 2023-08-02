import Head from 'next/head'
import Image from 'next/image'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useState } from 'react';

import styles from '../styles/index.module.css'
import TypeText from '../src/TypeText/TypeText'

function Main(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { t } = useTranslation(['common'])

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Head>
        <title>{t('ANDREW_PAGE')}</title>
        <meta name="description" content="Charwisd personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.photo}>
            <Image src={"/profile.png"} priority={true} fill={true} style={{objectFit: "cover", overflow: "hidden"}} sizes="(max-width: 300px) 100vw, (max-width: 300px) 100vw" alt="My photo" />
          </div>

          <div className={styles.description}>
            <p>
              <TypeText interval={50} fullText={t('HELLO')} />
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'index',
      'common'
    ])),
  },
})

export default Main