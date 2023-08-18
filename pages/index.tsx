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
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.imageBlock}>
            <div className={styles.photo}>
              <div className={styles.photoHolder}>
                <Image src={"/LOGO.png"} priority={true} fill={true} style={{objectFit: "cover", overflow: "hidden"}} sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw" alt="My photo" />
              </div>
            </div>

            <div className={styles.langBlock}>
              <div className={styles.langIcon} id={styles.iconOne}>
                <div className={styles.langIconHolder}>
                  <Image src={"/python.svg"} priority={true} fill={true} style={{objectFit: "cover", overflow: "hidden"}} sizes="(max-width: 32px) 100vw, (max-width: 32px) 50vw" alt="Python icon" />
                </div>
              </div>
              <div className={styles.langIcon} id={styles.iconTwo}>
                <div className={styles.langIconHolder}>
                  <Image src={"/javascript.svg"} priority={true} fill={true} style={{objectFit: "cover", overflow: "hidden"}} sizes="(max-width: 32px) 100vw, (max-width: 32px) 50vw" alt="JavaScript icon" />
                </div>
              </div>
              <div className={styles.langIcon} id={styles.iconThree}>
                <div className={styles.langIconHolder}>
                  <Image src={"/C_lang.svg"} priority={true} fill={true} style={{objectFit: "cover", overflow: "hidden"}} sizes="(max-width: 32px) 100vw, (max-width: 32px) 50vw" alt="C lang icon" />
                </div>
              </div>
            </div>
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