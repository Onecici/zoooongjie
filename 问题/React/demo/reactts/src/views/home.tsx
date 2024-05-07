import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

export default function home() {
  const { t } = useTranslation()
  return (
    <Fragment>
      <h1>{t('welcome')}</h1>
    </Fragment>
  )
}
