/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const LOADING = i18n.translate('xpack.lists.autocomplete.loadingDescription', {
  defaultMessage: 'Loading...',
});

export const SELECT_FIELD_FIRST = i18n.translate('xpack.lists.autocomplete.selectField', {
  defaultMessage: 'Please select a field first...',
});

export const FIELD_REQUIRED_ERR = i18n.translate('xpack.lists.autocomplete.fieldRequiredError', {
  defaultMessage: 'Value cannot be empty',
});

export const NUMBER_ERR = i18n.translate('xpack.lists.autocomplete.invalidNumberError', {
  defaultMessage: 'Not a valid number',
});

export const DATE_ERR = i18n.translate('xpack.lists.autocomplete.invalidDateError', {
  defaultMessage: 'Not a valid date',
});
